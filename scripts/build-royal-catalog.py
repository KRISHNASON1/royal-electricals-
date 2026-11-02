"""Build Royal's branded range guide from the unchanged website product index."""
from pathlib import Path
import json
import re
import shutil
from html import escape

from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'output/pdf/Royal-Electricals-Catalog.pdf'
OUT.parent.mkdir(parents=True, exist_ok=True)
GOLD, RED = HexColor('#98731B'), HexColor('#B5332E')
INK, MUTED, PALE = HexColor('#292524'), HexColor('#57534E'), HexColor('#FBF8EC')
WIDTH, HEIGHT = 595.28, 841.89
source = (ROOT / 'src/app/products/page.js').read_text()
categories = []
for match in re.finditer(r"id: '([^']+)',\s*name: '([^']+)',\s*subcategories: \[(.*?)\n\s*\],", source, re.S):
    items = re.findall(r"\{ name: '([^']+)', href: '([^']+)', image: '([^']+)' \}", match[3])
    categories.append((match[2], items))
assert len(categories) == 7, 'Expected the seven existing product categories'
catalog = json.loads((ROOT / 'src/data/catalog.json').read_text())
lookup = {entry['category'].casefold(): entry['products'] for entry in catalog}

doc = canvas.Canvas(str(OUT), pagesize=(WIDTH, HEIGHT))
doc.setTitle('Royal Electricals & Hardware - Product Catalogue')
doc.setAuthor('Royal Electricals & Hardware')
doc.setSubject('Electrical and hardware product range guide')

def text(value, x, y, width=500, size=11, color=INK, bold=False, leading=None):
    style = ParagraphStyle('royal', fontName='Helvetica-Bold' if bold else 'Helvetica', fontSize=size,
                           leading=leading or size * 1.4, textColor=color, alignment=TA_LEFT)
    p = Paragraph(value, style)
    _, h = p.wrap(width, HEIGHT)
    p.drawOn(doc, x, y - h)
    return h

def frame(page, category=None):
    doc.setFillColor(HexColor('#FFFFFF'))
    doc.rect(0, 0, WIDTH, HEIGHT, fill=1, stroke=0)
    doc.setFillColor(GOLD)
    doc.rect(0, HEIGHT - 7, WIDTH, 7, fill=1, stroke=0)
    doc.drawImage(str(ROOT / 'public/royal-logo.png'), 40, HEIGHT - 80, width=230, height=46, mask='auto')
    text('PRODUCT RANGE GUIDE', 365, HEIGHT - 47, 190, 9, GOLD, True)
    doc.setStrokeColor(HexColor('#E7E5E4'))
    doc.line(40, 65, WIDTH - 40, 65)
    text('ROYAL ELECTRICALS &amp; HARDWARE', 40, 52, 340, 8, GOLD, True)
    text('www.royalelectrical.in  |  +91 85911 69113', 40, 36, 400, 8, MUTED)
    text(f'{page:02d}', WIDTH - 60, 48, 30, 10, RED, True)

frame(1)
text('SINCE 2000', 44, 703, 400, 11, RED, True)
text('Electrical &amp;<br/>Hardware Solutions', 40, 663, 510, 41, GOLD, True, 47)
text('Product Catalogue', 43, 548, 480, 24, INK, True)
text('Explore our electrical, hardware, and industrial supply range. Browse by category and contact our team with your requirements.', 43, 495, 450, 13, MUTED)
doc.setFillColor(PALE)
doc.roundRect(40, 322, 515, 100, 16, fill=1, stroke=0)
for i, (value, label) in enumerate([('50+', 'Clients'), ('1000+', 'Products'), ('2000', 'Established')]):
    x = 61 + i * 168
    text(value, x, 401, 150, 27, RED if i == 1 else GOLD, True)
    text(label, x, 357, 150, 11, MUTED)
text('BRANDS WE SUPPLY', 43, 291, 480, 10, GOLD, True)
text('Siemens · L&amp;T · Havells · Standard Electricals · Anchor/Roma · Usha · Bajaj · Polycab · Syska · Osram · Berger', 43, 268, 500, 11, INK)
text('Talk to Royal', 43, 205, 480, 17, RED, True)
text('+91 85911 69113  |  022-27401969  |  022-27410775<br/>royalelectrical_taloja@rediffmail.com', 43, 176, 500, 11, INK)
text('Plot No. PAP 57, Opposite M.I.D.C. Water Tank,<br/>Taloja MIDC, Raigad - 410208, Maharashtra, India', 43, 127, 500, 10, MUTED)
doc.showPage()

for page, (name, items) in enumerate(categories, 2):
    frame(page)
    text(f'0{page-1} / PRODUCT RANGE', 40, 735, 500, 10, RED, True)
    text(escape(name), 40, 708, 515, 27, GOLD, True, 32)
    text('Contact our team for product selection, specifications, and a quotation.', 40, 655, 510, 10, MUTED)
    for i, (title, href, image) in enumerate(items):
        col, row = i % 2, i // 2
        x, top = 40 + col * 265, 613 - row * 103
        doc.setFillColor(PALE if i % 3 else HexColor('#FDF3F2'))
        doc.roundRect(x, top - 92, 250, 92, 10, fill=1, stroke=0)
        doc.setFillColor(GOLD if i % 3 else RED)
        doc.roundRect(x, top - 92, 4, 92, 2, fill=1, stroke=0)
        heading_h = text(escape(title), x + 15, top - 12, 220, 12, INK, True, 15)
        clean = re.sub(r'\s*\([^)]*\)', '', title).casefold()
        products = lookup.get(title.casefold(), lookup.get(clean, []))
        examples = ', '.join(p['name'] for p in products[:4])
        body = escape(examples) if examples else 'Explore this range on our website or enquire with our team.'
        text(body, x + 15, top - 19 - heading_h, 220, 9, MUTED, leading=12)
        doc.linkURL('https://www.royalelectrical.in' + href, (x, top - 92, x + 250, top), relative=0)
    doc.showPage()

doc.save()
shutil.copyfile(OUT, ROOT / 'public/Royal-Electricals-Catalog.pdf')
print(f'Created {OUT} with {len(categories)+1} pages and {sum(len(x[1]) for x in categories)} product ranges')

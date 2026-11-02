import ProductListing from '@/components/products/ProductListing';

const products = [
    { name: 'LT Panels', description: 'Low tension power distribution panels for industrial and commercial electrical supply management.', image: '/images/products/electrical/electrical-panels/lt-panels.jpg', specs: ['Voltage: Up to 690V', 'Current: Up to 6300A', 'Standard: IEC 61439'] },
    { name: 'HT Panels', description: 'High tension panels for receiving and distributing power from utility transformers to internal systems.', image: '/images/products/electrical/electrical-panels/ht-panels.jpg', specs: ['Voltage: 11kV/33kV', 'Type: Indoor/Outdoor', 'Switchgear: VCB/SF6'] },
    { name: 'PCC Panels', description: 'Power Control Center panels for centralized monitoring and control of power distribution.', image: '/images/products/electrical/electrical-panels/pcc-panel-power-control-center.jpg', specs: ['Type: Draw-out/Fixed', 'Busbars: Copper/Aluminum', 'Metering: Digital'] },
    { name: 'MCC Panels', description: 'Motor Control Center panels for starting, stopping, and protecting multiple motors from a single location.', image: '/images/products/electrical/electrical-panels/mcc-panel-motor-control-center.jpg', specs: ['Starters: DOL/Star-Delta', 'Protection: MPCB/Fuse', 'Communication: Optional'] },
    { name: 'APFC Panels', description: 'Automatic Power Factor Correction panels for maintaining optimal power factor and reducing penalties.', image: '/images/products/electrical/electrical-panels/apfc-panel-automatic-power-factor.jpg', specs: ['Steps: 6–14', 'Controller: Digital', 'Capacitors: MPP'] },
    { name: 'VFD Panels', description: 'Variable Frequency Drive panels for speed control of motors in HVAC, pumps, and conveyors.', image: '/images/products/electrical/electrical-panels/vfd-panel-variable-frequency-drive.jpg', specs: ['Rating: 0.75–500kW', 'Input: 3Ø 415V', 'Control: V/F/Vector'] },
    { name: 'PLC Panels', description: 'PLC-based automation panels for process control, machine automation, and SCADA integration.', image: '/images/products/electrical/electrical-panels/plc-panel-automation-control.jpg', specs: ['PLC: Siemens/AB/Mitsubishi', 'I/O: Digital/Analog', 'HMI: Touch Panel'] },
    { name: 'Distribution Panels', description: 'Main and sub-distribution panels for branching power supply to various circuits and loads.', image: '/images/products/electrical/electrical-panels/lt-panel-power-distribution.jpg', specs: ['Ways: 4–36', 'Type: TPN/SPN', 'Protection: MCB/MCCB'] },
];

export default function ElectricalPanelsPage() {
    return (
        <ProductListing
            title="Electrical Panels"
            description="Custom-built electrical panels for power distribution, motor control, automation, and power factor correction. Designed and manufactured to IS/IEC standards."
            benefits={['Multiple Ratings', 'IS/IEC Certified', 'Type Tested', 'Panel Components']}
            products={products}
            categoryBackLink="/products"
        />
    );
}

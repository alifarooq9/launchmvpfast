import { NextResponse } from 'next/server'

// Sample equipment status data
const equipmentData = [
    {
        id: 'ag-001',
        type: 'Agricultural Drone',
        model: 'AgriFly Pro X1',
        status: 'active',
        location: 'Iowa Farm Cooperative',
        lastMaintenance: '2025-06-15',
        hoursFlown: 342,
        utilizationRate: 85,
    },
    {
        id: 'sv-002', 
        type: 'Survey Drone',
        model: 'SurveyMaster 4K',
        status: 'active',
        location: 'Atlanta Operations Center',
        lastMaintenance: '2025-06-10',
        hoursFlown: 156,
        utilizationRate: 92,
    },
    {
        id: 'in-003',
        type: 'Industrial Inspector',
        model: 'InspectPro Thermal',
        status: 'maintenance',
        location: 'California Service Hub',
        lastMaintenance: '2025-06-28',
        hoursFlown: 234,
        utilizationRate: 78,
    },
    {
        id: 'ag-004',
        type: 'Agricultural Drone',
        model: 'CropScan Elite',
        status: 'active',
        location: 'Nebraska Agricultural Center',
        lastMaintenance: '2025-06-20',
        hoursFlown: 289,
        utilizationRate: 88,
    },
]

export async function GET() {
    try {
        // In a real implementation, this would fetch real-time equipment data
        // For now, return sample data with some random variations
        const equipment = equipmentData.map(item => ({
            ...item,
            hoursFlown: item.hoursFlown + Math.floor(Math.random() * 5),
            utilizationRate: Math.min(100, item.utilizationRate + Math.floor(Math.random() * 10) - 5),
        }))

        const summary = {
            totalEquipment: equipment.length,
            activeEquipment: equipment.filter(e => e.status === 'active').length,
            maintenanceEquipment: equipment.filter(e => e.status === 'maintenance').length,
            averageUtilization: Math.round(
                equipment.reduce((sum, e) => sum + e.utilizationRate, 0) / equipment.length
            ),
        }

        return NextResponse.json({
            success: true,
            data: {
                summary,
                equipment,
                lastUpdated: new Date().toISOString(),
            },
        })
    } catch (error) {
        return NextResponse.json(
            { 
                success: false, 
                error: 'Failed to fetch equipment status' 
            },
            { status: 500 }
        )
    }
}

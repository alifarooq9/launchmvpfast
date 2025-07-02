import { NextResponse } from 'next/server'

// Sample public statistics data
const publicStats = {
    totalAssets: 2400000,
    activeMembers: 847,
    activeEquipment: 156,
    averageReturn: 18.2,
    projectsCompleted: 1247,
    communitiesServed: 248,
    lastUpdated: new Date().toISOString(),
}

export async function GET() {
    try {
        // In a real implementation, this would fetch from a database
        // For now, return sample data with some random variation
        const stats = {
            ...publicStats,
            totalAssets: publicStats.totalAssets + Math.floor(Math.random() * 10000),
            activeMembers: publicStats.activeMembers + Math.floor(Math.random() * 5),
            projectsCompleted: publicStats.projectsCompleted + Math.floor(Math.random() * 3),
            lastUpdated: new Date().toISOString(),
        }

        return NextResponse.json({
            success: true,
            data: stats,
        })
    } catch (error) {
        return NextResponse.json(
            { 
                success: false, 
                error: 'Failed to fetch public statistics' 
            },
            { status: 500 }
        )
    }
}

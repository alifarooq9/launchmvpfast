import { ComingSoon } from '@/app/(app)/_components/coming-soon'
import { PageContainer } from '@/app/(app)/_components/page-header'

export default function Docs() {
    return (
        <PageContainer>
            <ComingSoon
                title="Docs"
                description="We're putting together helpful guides and examples to get you up and running. Join the early access list to be notified"
            />
        </PageContainer>
    )
}

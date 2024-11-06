// Function to extract expert information from the page
function extractExpertInfo() {
    const experts = []
    const expertCards = document.querySelectorAll('.expert-infos')

    expertCards.forEach((card) => {
        // Extract basic info
        const nameElement = card.querySelector('.expert-card-title a')
        const name = nameElement ? nameElement.textContent.trim() : ''
        const profileUrl = nameElement ? nameElement.href : ''

        // Extract specialty/branch
        const branchElement = card.querySelector('.card-branch h3')
        const branch = branchElement ? branchElement.textContent.trim() : ''

        // Extract city
        const cityElement = card.querySelector('.card-city')
        const city = cityElement ? cityElement.textContent.trim() : ''

        // Extract review
        const reviewElement = card.querySelector('.expert-card-review p')
        const review = reviewElement ? reviewElement.textContent.trim() : ''

        // Extract stats from title attribute
        const branchDiv = card.querySelector('.card-branch')
        let stats = {}
        if (branchDiv && branchDiv.title) {
            try {
                stats = JSON.parse(branchDiv.title)
            } catch (e) {
                console.error('Failed to parse stats:', e)
            }
        }

        // Get WhatsApp link if exists
        const whatsappElement = card.querySelector(
            '.expert-card-title a[href*="whatsapp"]'
        )
        const whatsappUrl = whatsappElement ? whatsappElement.href : ''

        experts.push({
            name,
            profileUrl,
            branch,
            city,
            review,
            stats,
            whatsappUrl,
        })
    })

    return experts
}

// Execute and log results
const expertData = extractExpertInfo()
console.log('Extracted Expert Data:', expertData)

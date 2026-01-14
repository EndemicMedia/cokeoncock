import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { TRUST_BADGES } from '../../config/constants'

export default function TrustBadge({ badge, compact = false }) {
    if (compact) {
        return (
            <div className="flex items-center gap-2 text-sm">
                <span className="text-2xl" aria-hidden="true">{badge.icon}</span>
                <span className="font-bold">{badge.title}</span>
            </div>
        )
    }

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-4 border-2 border-white bg-black"
        >
            <div className="text-4xl mb-2" aria-hidden="true">{badge.icon}</div>
            <h3 className="font-bold text-sm uppercase mb-1">{badge.title}</h3>
            <p className="text-xs text-gray-400">{badge.description}</p>
        </motion.div>
    )
}

TrustBadge.propTypes = {
    badge: PropTypes.shape({
        id: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,
    compact: PropTypes.bool
}

// Component to display all trust badges
export function TrustBadges({ compact = false }) {
    if (compact) {
        return (
            <div className="flex flex-wrap items-center justify-center gap-6">
                {TRUST_BADGES.map(badge => (
                    <TrustBadge key={badge.id} badge={badge} compact />
                ))}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TRUST_BADGES.map(badge => (
                <TrustBadge key={badge.id} badge={badge} />
            ))}
        </div>
    )
}

TrustBadges.propTypes = {
    compact: PropTypes.bool
}

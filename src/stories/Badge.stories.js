import React from 'react';
import { Badge } from '../components/Badge';
import { Icon } from '../components/Icon';

export default {
    title: 'Design System/Badge',
    component: Badge,
};

export const AllBadges = (args) => (
    <div>
        <Badge status='positive'>Positive</Badge>
        <Badge status='negative'>Negative</Badge>
        <Badge status='neutral'>Neutral</Badge>
        <Badge status='error'>Error</Badge>
        <Badge status='warning'>Warning</Badge>
        <Badge status='positive'>
            <Icon {...args} />
            with icon
        </Badge>
    </div>
);
AllBadges.args = {
    icon: 'facehappy',
    inline: true,
}

AllBadges.storyName = 'all badges';
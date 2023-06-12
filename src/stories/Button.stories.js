import React from 'react';
import styled from 'styled-components';

import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { StoryLinkWrapper } from './StoryLinkWrapper';

const CustomButton = styled.button`
    border: 1px solid green;
    background: lightgreen;
    color: rebeccapurple;
    padding: 1em;
    font-size: 1.2em;
`;

function ButtonWrapper(props) {
    return <CustomButton {...props} />;
}

export default {
    title: 'Design System/Button',
    component: Button,
};

export const AllButtons = (args) => (
    <div>
        <Button appearance='primary'>Primary</Button>
        <Button appearance='secondary'>Secondary</Button>
        <Button appearance='tertiary'>Tertiary</Button>
        <Button appearance='outline'>Outline</Button>
        <Button appearance='primaryOutline'>Outline primary</Button>
        <Button appearance='secondaryOutline'>Outline secondary</Button>
        <Button appearance='primary' isDisabled>
            Disabled
        </Button>
        <br />
        <Button appearance='primary' isLoading>
            Primary
        </Button>
        <Button appearance='secondary' isLoading>
            Secondary
        </Button>
        <Button appearance='tertiary' isLoading>
            Tertiary
        </Button>
        <Button appearance='outline' isLoading>
            Outline
        </Button>
        <Button appearance='outline' isLoading loadingText='Custom...'>
            Outline
        </Button>
        <br />
        <Button appearance='primary' size='small'>
            Primary
        </Button>
        <Button appearance='secondary' size='small'>
            Secondary
        </Button>
        <Button appearance='tertiary' size='small'>
            Tertiary
        </Button>
        <Button appearance='outline' size='small'>
            Outline
        </Button>
        <Button appearance='primary' isDisabled size='small'>
            Disabled
        </Button>
        <Button appearance='outline' size='small' containsIcon>
            <Icon icon='link' aria-label='Link' />
        </Button>        
        <Button appearance='outline' size='small'>
            <Icon icon='Link' />
            Link
        </Button>
    </div>
);

AllButtons.storyName = 'all buttons';
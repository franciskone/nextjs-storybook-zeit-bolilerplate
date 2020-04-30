import React from 'react';
import Button from './Button';
import Page from '../../pages/index';

export default { title: 'Button' };

export const withText = () => <Button text='Hello Button' />;

export const withEmoji = () => (
	<Button text='😀 😎 👍 💯' />
);

export const pageBlank = () => <Page />;

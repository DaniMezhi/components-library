/* eslint-disable import/no-extraneous-dependencies */
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './Button.vue';

export default {
	component: Button,
	title: 'Components/Button',
	decorators: [withKnobs]
};

export const regular = () => ({
	components: { Button },
	template: "<Button :disabled='disabled' @click='click'/>",
	props: {
		disabled: {
			default: boolean('disabled', false)
		}
	},
	methods: {
		click: action('click')
	}
});

import { Meta, Story } from '@storybook/angular/types-6-0';
import {AppComponent} from './app.component';

export default {
  title: 'AppComponent',
  component: AppComponent
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});

export const Basic = Template.bind({});

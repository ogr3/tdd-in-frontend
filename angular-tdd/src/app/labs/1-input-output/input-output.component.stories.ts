// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { action } from '@storybook/addon-actions'
import {
  Meta,
  Story
} from '@storybook/angular/types-6-0'
import { InputOutputComponent } from './input-output.component'

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'TDD-Labbar/1. InputOutputComponent',
  component: InputOutputComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
} as Meta<InputOutputComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<InputOutputComponent> = (args: InputOutputComponent) => ({
  props: {
    ...args,
    myOutput: action('My output')  // kopplar till @Output()-fältet InputOutputComponent.myOutput (i alla stories nedan)
  },
});

export const Example1 = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Example1.args = {
  myInput: {name: 'Kaka Banan'} // Kopplar till @Input()-fältet InputOutputComponent.myInput
};


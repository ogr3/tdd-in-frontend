// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { action } from '@storybook/addon-actions'
import {
  Meta,
  Story
} from '@storybook/angular/types-6-0'
import { TestStructureComponent } from './test-structure.component'

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'TDD-Labbar/5. TestStructureComponent',
  component: TestStructureComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {},
} as Meta<TestStructureComponent>;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<TestStructureComponent> = (args: TestStructureComponent) => ({
  props: {
    ...args,
    dOutput: action('D Output')
  },
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {};


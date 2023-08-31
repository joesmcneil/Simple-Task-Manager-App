import { mount } from '@vue/test-utils';
import inputField from '@/components/inputField.vue'; 
import { expect, test } from 'vitest'

test('Message Test', () => {
  const message:string = 'Hi Sherree'
  expect(message).toBe('Hi Sherree')
})

/*
test('Adding a task', () => {
  const taskToInsert = 'Hi';
  const component = mount(inputField);
})
*/
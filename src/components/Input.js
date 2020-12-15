import tw, { styled } from 'twin.macro'

// const Input = styled.input.attrs(() => ({ type: 'text' }))(() => [
//   tw`shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-lg focus:z-10`
// ])

function Input(){
  return <input type='text' css={tw`shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-lg focus:z-10`} />
}

export default Input

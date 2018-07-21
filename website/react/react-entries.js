// Add new react components here 
// The path to the component is relative to the webpack.config file
const reactComponents = './website/react/components'

module.exports = {
  test: `${reactComponents}/test`,
  vendor: ['react', 'react-dom'],
}
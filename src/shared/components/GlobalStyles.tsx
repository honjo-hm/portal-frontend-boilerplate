import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = () => injectGlobal`
  ${reset}
  .test {
    background: red;
  }
`
export default GlobalStyles

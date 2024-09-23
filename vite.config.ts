import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/*export default defineConfig({
  plugins: [react()],
  base:'dashboard',
 
})
*/

export default defineConfig(({ command,}) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
    
      // dev specific config
    }
  } else {
    // command === 'build'
    return {
      plugins: [react()],
      
      // build specific config
    }
  }
})

import Navbar from '@/components/navbar';
import'@/assets/styles/globals.css'

export const metadata ={
    title: 'TMAS - Tournament Manager',
    description:'Manage your tournamets with ease',
    keywords: 'tournament, host tournament, results'

}


const MainLayout = ({ children}) => {
  return (
    <html lang = 'en'>
        <body>
          <Navbar /> 
          <main>{children}</main>  
        </body>
   </html>
    
  );
}
// Comment test
export default MainLayout

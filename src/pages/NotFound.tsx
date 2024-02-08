import { BackHome } from '../components/BackHome'

export const NotFound = () => {
  return (
    <div className='vw-100 d-flex justify-content-center flex-column'>
      <h1 className='mx-auto'>404 - Page Not Found</h1>
      <p className='mx-auto'>Sorry, the page you are looking for does not exist.</p>
      <div className='mx-auto'>
        <BackHome/>
      </div>
    </div>
  )
}

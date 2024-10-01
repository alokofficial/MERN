import styles from './App.module.css'
import Container from './Constainer'
export default function App() {
  
  return (
    <>
    <div className={styles.headi}>This is heading</div>
    <Container>
      <div className='bg-gray-600 text-white text-4xl'>
        <div>This is simple div</div>
      </div>
    </Container>
    </>
  )
}
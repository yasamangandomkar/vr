import Button from './Button'

const Nav = () => {
    return (

        <div className=' hidden space-x-8 font-secondary  lg:flex items-center '>
            <a href="" className='nav'>Home</a>
            <a href="" className='nav'>Company</a>
            <a href="" className='nav'>Features</a>
            <Button>sign up</Button>
        </div>

    )
}

export default Nav
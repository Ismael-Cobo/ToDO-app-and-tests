import LaptopSVG from '../../../styles/img/laptop.svg'

export const Header = () => {
    return (
        <div className='todo__heading'>
            <img className='heading__img' src={LaptopSVG} alt='heading Img' />
            <h1 className='heading__title'>To-Do List</h1>
        </div>
    )
}

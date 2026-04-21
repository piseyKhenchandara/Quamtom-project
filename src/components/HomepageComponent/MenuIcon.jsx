import Link from 'next/link';
import hoodyIcon from '../../assets/MenuIcon/hoodyIcon.jpg';
import tShirtIcon from '../../assets/MenuIcon/shirtIcon.jpg';
import pantIcon from '../../assets/MenuIcon/pantIcon.jpg';
import bagIcon from '../../assets/MenuIcon/bagIcon.png';
import capIcon from '../../assets/MenuIcon/capIcon.png';

const MenuIcon = () => {
    const Icons = [
        { iconImg: hoodyIcon, title: 'Hoodies', path: '/hoodies' },
        { iconImg: tShirtIcon, title: 'T-Shirt', path: '/tshirts' },
        { iconImg: pantIcon, title: 'Pants', path: '/pants' },
        { iconImg: bagIcon, title: 'Bag', path: '/bags' },
        { iconImg: capIcon, title: 'Cap', path: '/caps' },
    ];

    return (
        <div className='w-full'>
            <div className='flex flex-row justify-around md:justify-center md:gap-15 gap-2 m-5 cursor-pointer'>
                {Icons.map(icon => (
                    <Link href={icon.path} key={icon.title} className='flex flex-col items-center '>
                        <img src={icon.iconImg} alt={icon.title} className='w-[1.5rem] md:w-[3rem]' />
                        <p>{icon.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MenuIcon;

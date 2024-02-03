import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='container mx-auto flex justify-between items-center py-4  border-b-2'>
            <h2 className=' text-4xl'>Knowledge Caffee</h2>
            <img src={profile} alt="profile" />
        </div>
    );
};

export default Header;
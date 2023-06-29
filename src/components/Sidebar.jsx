import {Stack} from '@mui/material';
import {categories} from '../utils/constants';

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
    <Stack
    direction='row'
    sx={{
        overflowY: 'auto',
        height: {
            sx: 'auto', 
            md: '95%'
        },
        flexDirection: {md: 'column'},
    }}
    >
        {categories.map((category) => (
            <button className='category-btn'
            onClick={() => setSelectedCategory(category.name)}
            style={{
                background: category.name === selectedCategory && '#FC1503', //if category.name strictly equals selectedCategory then change color//
                color: 'white'
            }}
            key={category.name}
            //whenever we are mapping in Raect we have to give each property a key//
            >
                <span style={{
                    color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'
                    // if category.name strictly equals selectedCategory show white color other show red color.//
                }} >{category.icon}</span>
                <span
                style={{
                    opacity: category.name === selectedCategory ? '1': '0.8'
                }}
                >{category.name}</span>
            </button>
        ))}
    </Stack>
)
export default Sidebar
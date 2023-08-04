import React, { useState } from 'react'
import './Emoji.css'
const emojidata=[{
    id:1,
    symbol:"😡",
    name:"Angry"
},
{
    id:2,
    symbol:"🥳",
    name:"Party"
},
{
    id:3,
    symbol:"👍",
    name:"good"
},
{
    id:4,
    symbol:"🤧",
    name:"fever"
},
{
    id:5,
    symbol:"🤭",
    name:"giggle"
},
{
    id:6,
    symbol:"❤️",
    name:"Heart"
},
{
    id:7,
    symbol:"🥰",
    name:"Crush"
},
{
    id:8,
    symbol:"😎",
    name:"Cool"
} ,
{
    id:9,
    symbol:"💔",
    name:"broken"
},
{
    id:10,
    symbol:"😉",
    name:"flirt"
},
{
    id:11,
    symbol:"😭",
    name:"cry"
},


];
function Emoji() {

const [searchEmoji,setSearchEmoji]=useState("")
const handleChange=(e)=>{
    setSearchEmoji(e.target.value);
}
const showEmoji=emojidata.filter((emoji)=>{
    const emojiName=emoji.name.toLowerCase();
    return(emojiName.includes(searchEmoji.toLowerCase()));
});

  return (
    <div id="background">
        <div id="emoji">
        <h1 id="h1" >React Emoji App</h1>
        <input id="input" type='text' placeholder='Search for emoji......' value={searchEmoji} on onChange={handleChange}></input>
        <div>
            {showEmoji.map((emoji) => emoji.symbol)}
        </div>

        </div>
        
    </div>
  )
}

export default Emoji












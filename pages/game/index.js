import { useState,useEffect} from "react";
import Rock from '../../public/stone.png'
import Scissors from '../../public/sisor.png'
import Paper from '../../public/paper.png'
import winimg from '../../public/win.png'
import loss from '../../public/loss.png'
import sad from '../../public/sad emoji.png'
import styles from '../../styles/Home.module.css'
const Game=()=>{
    const [userChoice,setuserChoice]=useState(0)
    const [win,setwin]=useState(0)
    const [computerChoice, setComputerChoice]=useState(0)
    const handleWin=()=>{
        if (userChoice==1 && computerChoice==2){
            setwin(2)
        }else if (userChoice==1 && computerChoice==3){
            setwin(1)
        }else if (userChoice==2 && computerChoice==1){
            setwin(1)
        }else if (userChoice==2 && computerChoice==3){
            setwin(2)
        }else if (userChoice==3 && computerChoice==1){
            setwin(2)
        }else if (userChoice==3 && computerChoice==2){
            setwin(1)
        }
    }
    const handleUserChoice=async(e)=>{
        await setuserChoice(e)
    }
    const handleComputerChoice=()=>{
        var value = Math.floor(Math.random() * 3) + 1;
        while (value==userChoice){
            value = Math.floor(Math.random() * 3) + 1;
        }
        setComputerChoice(value)
    }
    const handleShow=(e)=>{
        if (e==1){
            return <img  src={Rock.src} style={{height:100,width:100,borderRadius:100}}/>
        }else if(e==2){
            return <img   src={Scissors.src} style={{height:100,width:100,borderRadius:100}} />
        }else{
            return <img  src={Paper.src} style={{height:100,width:100,borderRadius:100}} />
        }
    }
    useEffect(()=>{
        if (userChoice!=0 ){
            handleComputerChoice()
        }
    },[userChoice,handleComputerChoice])
    useEffect(()=>{
        if(computerChoice!=0){
            handleWin()
        }
    },[computerChoice,handleWin])
    const reset=()=>{
        setComputerChoice(0)
        setuserChoice(0)
        setwin(0)
    }
    // console.log(userChoice,computerChoice)
    return (
    <div className={styles.container}>
            {userChoice==0 && computerChoice==0?<main className={styles.main}><h1 className={styles.title}>
            select your choice
        </h1>
        <div className={styles.images}>
        <img onClick={e=>handleUserChoice(1)} src={Rock.src} style={{height:100,width:100,borderRadius:100}}/>
        <img onClick={e=>handleUserChoice(2)}  src={Scissors.src} style={{height:100,width:100,borderRadius:100}} />
        <img  onClick={e=>handleUserChoice(3)}  src={Paper.src} style={{height:100,width:100,borderRadius:100}} />
        </div>
            </main>:<main className={styles.main}>
                {
                    win==2?<img src={winimg.src} style={{width:200,height:300}}/>:win==1?<img src={loss.src} style={{width:200,height:300}}/>:<div><img src={winimg.src} style={{width:200,height:300}}/><img src={loss.src}  style={{width:200,height:300}} /></div>
                }
                <div className={styles.zone}>
                    <div style={{textAlign:"left",margin:10}}>
                        <h1>
                            YOU
                        </h1>
                        {handleShow(userChoice)}
                    </div>
                    <div style={{textAlign:"right",margin:10}}>
                        <h1>
                            JACK
                        </h1>
                        {handleShow(computerChoice)}

                    </div>
                </div>
                <div className={styles.button} >
        <button 
        onClick={
          e=>{
            reset()
          }
        }
        >play again</button></div>
            </main>
            
        }
        
    </div>)
}

Game.displayName = 'Game';
export default Game
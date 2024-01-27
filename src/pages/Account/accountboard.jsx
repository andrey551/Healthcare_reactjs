import { Box, Button, Collapse, Input, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import WalletIcon from '@mui/icons-material/Wallet';
import LogoutIcon from '@mui/icons-material/Logout';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import { useDispatch, useSelector } from 'react-redux';
import { getWallet, updatePassword, updateUser, updateWalletdisp } from '../../hooks/modules/profile';
import { redirect, useNavigate } from 'react-router-dom';

// const user = {
//     Name: "Dau Cong Tuan Anh",
//     avatar: 'https://upload.wikimedia.org/wikipedia/ru/e/e5/Itachi_Uchiha.jpg',
//     Age: 23,
//     Height: 167,
//     Telephone: "0348674655",
//     Address: "Vyazemsky Ln, 5/7 Sankt-Peterburg",
//     last_checked: "Today",
//     wallet:{
//         balance: '10600',
//         unit: 'RUB',
//         payment: {
//             name: 'DAU CONG TUAN ANH',
//             card_number: '2458455842542415',
//             cvv: '106',
//             YYMM: '05/25',
//         }
//     }
// }
const AccountBoard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getWallet())
    }, [])
    const user = useSelector((state => state.user.user))
    const [personal, setPersonal] = useState(false);
    const [password, setPassword] = useState(false);
    const [wallet, setWallet] = useState(false);
    const defWallet = useSelector((state => state.profile.wallet))
    console.log(defWallet)
    const [card, setCard] = useState({
        name: defWallet.name,
        balance: defWallet.balance,
        unit: defWallet.unit,
        card_number: defWallet.card_number,
        cvc: defWallet.cvv,
        YYMM: defWallet.mmyy,
        focus: ''
    })

    const [newUser, setNewUser]  = useState({
        name: user.name,
        age: user.age,
        telephone: user.telephone,
        address : user.address
    })

    const [newPassword, setNewPassword] = useState({
        oldPassword: '',
        newPassword: '',
        confirm: ''
    })

    const handleInputChange = (evt) => {
        console.log(evt.target)
        const { name, value } = evt.target;
        
        setCard((prev) => ({ ...prev, [name]: value }));
      }
    
      const handleInputFocus = (evt) => {
        setCard((prev) => ({ ...prev, focus: evt.target.name }));
      }
      const handleUserFocus = (evt) => {
        const {name, value} = evt.target
        if(name == 'age') setNewUser((prev) => ({...prev, [name]: Number.parseInt(value)}))
        else setNewUser((prev) => ({...prev, [name]: value}))
      }

      const handlePasswordChange = (evt) => {
        const {name, value} = evt.target
        setNewPassword((prev) => ({...prev, [name]: value}))
      }
    
    function openPersonal() {
        setPersonal(true)
    }
    function closePersonal() {
        setPersonal(false)
    }

    function openPassword() {
        setPassword(true)
    }
    function closePassword() {
        setPassword(false)
    }

    function openWallet() {
        setWallet(true)
    }
    function closeWallet() {
        setWallet(false)
    }

    function confirmChangeUser() {
        dispatch(updateUser({newUser}))
    }

    function confirmChangePassword() {
        dispatch(updatePassword({newPassword}))
    }

    function confirmChangeWallet() {
        console.log(card)
        dispatch(updateWalletdisp({nameOnCard: card.name, card_number: card.card_number, cvv: card.cvc, mmyy: card.YYMM}))
    }

    const logout = () => {
        // localStorage.removeItem('tad');
        // navigate('/')
    }
    return(
        <>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Box sx={{display: 'flex', flexDirection: 'row',justifyContent:'center'}}>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Box sx= {{width: '16em', height: '22em', border: '1px green dashed'}}>
                            <img src={user.avatar} width={'250em'} height={'350em'} />
                        </Box>
                        <Box sx={{paddingLeft: '2em', width: '30em'}}>
                            <Typography variant='h6'><b>Full name: </b> {user.name}</Typography>
                            <Typography variant='h6'><b>Age: </b> {user.age}</Typography>
                            <Typography variant='h6'><b>Telephone: </b> {user.telephone}</Typography>
                            <Typography variant='h6'><b>Address: </b> {user.address}</Typography>
                            {/* <Typography variant='h6'><b>Last checked: </b> {user.last_checked}</Typography> */}
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'row',justifyContent:'center'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column',justifyContent:'center', width: '40em'}}>
                        <List>
                            <ListItem>
                                <ListItemButton onClick={openPersonal}>
                                    <ListItemIcon>
                                        <PersonIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Personal' secondary='Update personal information'/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton onClick={openPassword}>
                                    <ListItemIcon>
                                        <LockIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Password' secondary='Update password'/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton onClick={openWallet}>
                                    <ListItemIcon>
                                        <WalletIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Wallet' secondary='check out balance and change payment method'/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton onClick={logout()}>
                                    <ListItemIcon>
                                        <LogoutIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary='Logout'/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Box>
                <Modal open={personal}
                    onClose={closePersonal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Box sx={{display:'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '10em'}}>
                            <Box sx={{ width: '30em', height: '20em', backgroundColor: 'white', border: '1px gray solid' }}>
                            <Typography sx={{marginLeft: '2em', marginTop: '0.5em'}} variant='h5'>Information</Typography>
                                <Box sx={{display: 'flex', flexDirection: 'row', margin: '1em', paddingLeft: '2em', marginTop: '2em'}}>
                                    <Typography sx={{paddingTop: '8px', paddingRight: '10px'}} variant='body2'><b>Fullname</b></Typography>
                                    <Input name ='name' value={newUser.name} onChange={(e) => {
                                        handleUserFocus(e)
                                    }} placeholder={user.name}/>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'row', margin: '1em', paddingLeft: '2em'}}>
                                    <Typography sx={{paddingTop: '8px', paddingRight: '10px'}} variant='body2'><b>Age</b></Typography>
                                    <Input name = 'age' value = {newUser.age} onChange={(e) => {
                                        handleUserFocus(e)
                                    }} placeholder={user.age}/>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'row', margin: '1em', paddingLeft: '2em'}}>
                                    <Typography sx={{paddingTop: '8px', paddingRight: '10px'}} variant='body2'><b>Telephone</b></Typography>
                                    <Input name = 'telephone' value={newUser.telephone} onChange={(e) => {handleUserFocus(e)}} placeholder={user.telephone}/>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'row', margin: '1em', paddingLeft: '2em'}}>
                                    <Typography sx={{paddingTop: '8px', paddingRight: '10px'}} variant='body2'><b>Address</b></Typography>
                                    <Input name = 'address' value={newUser.address} onChange={(e) => {handleUserFocus(e)}} placeholder={user.address}/>
                                </Box>
                                <Box sx={{display:'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                                    <Box sx={{marginRight: '3em'}}>
                                        <Button onClick={closePersonal} color='error' sx={{marginRight: '2em'}} variant='outlined' >Quit</Button>
                                        <Button onClick={confirmChangeUser} color='success' variant='outlined'>Save</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                    </Box>

                </Modal>

                <Modal open={password}
                    onClose={closePassword}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Box sx={{display:'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '10em'}}>
                            <Box sx={{ width: '30em', height: '20em', backgroundColor: 'white', border: '1px gray solid' }}>
                            <Typography sx={{marginLeft: '2em', marginTop: '0.5em'}} variant='h5'>Password</Typography>
                                <Box sx={{display: 'flex', flexDirection: 'row', margin: '1em', paddingLeft: '2em', marginTop: '2em'}}>
                                    <Typography sx={{paddingTop: '8px', paddingRight: '10px'}} variant='body2'><b>Old password</b></Typography>
                                    <Input name = 'oldPassword' value = {newPassword.oldPassword} onChange={(e) => {setNewPassword(e)}} type='password'/>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'row', margin: '1em', paddingLeft: '2em'}}>
                                    <Typography sx={{paddingTop: '8px', paddingRight: '10px'}} variant='body2'><b>New password</b></Typography>
                                    <Input name = 'newPassword' value = {newPassword.oldPassword} onChange={(e) => {setNewPassword(e)}} type='password'/>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'row', margin: '1em', paddingLeft: '2em'}}>
                                    <Typography sx={{paddingTop: '8px', paddingRight: '10px'}} variant='body2'><b>Re-type new password: </b></Typography>
                                    <Input name = 'confirm' value = {newPassword.oldPassword} onChange={(e) => {setNewPassword(e)}} type='password'/>
                                </Box>
                                <Box sx={{display:'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                                    <Box sx={{marginRight: '3em'}}>
                                        <Button onClick={closePassword} color='error' sx={{marginRight: '2em'}} variant='outlined' >Quit</Button>
                                        <Button onClick={confirmChangePassword} color='success' variant='outlined'>Save</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Modal>
                <Modal open={wallet}
                    onClose={closeWallet}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Box sx={{display:'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '5em'}}>
                            <Box sx={{ width: '30em', height: '35em', backgroundColor: 'white', border: '1px gray solid' }}>
                            <Typography sx={{marginLeft: '2em', marginTop: '0.5em'}} variant='h5'>Wallet</Typography>
                                <Box sx={{display: 'flex', flexDirection: 'row', margin: '1em', paddingLeft: '2em'}}>
                                    <Typography sx={{paddingTop: '8px', paddingRight: '10px'}} variant='body2'><b>Balance: </b>{card.balance} {card.unit}</Typography>
                                </Box>
                                <Cards
                                    cvc={card.cvc}
                                    expiry={card.YYMM}
                                    name={card.name}
                                    number={card.card_number}
                                    focused={card.focus}
                                    />
                                <Box sx={{display: 'flex', flexDirection: 'row', margin: '1em', paddingLeft: '2em'}}>
                                    <Typography sx={{paddingTop: '8px', paddingRight: '10px'}} variant='body2'><b>Name On Card: </b></Typography>
                                    <Input name='name' onChange={handleInputChange} onFocus={handleInputFocus} value={card.name}/>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'row', margin: '1em', paddingLeft: '2em'}}>
                                    <Typography sx={{paddingTop: '8px', paddingRight: '10px'}} variant='body2'><b>Card number</b></Typography>
                                    <Input name='card_number' onChange={handleInputChange} onFocus={handleInputFocus} value={card.card_number}/>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'row', margin: '1em', paddingLeft: '2em'}}>
                                    <Typography sx={{paddingTop: '8px', paddingRight: '10px'}} variant='body2'><b>CVC</b></Typography>
                                    <Input name='cvc' type='text' inputProps={{maxLength:3}} onChange={handleInputChange} onFocus={handleInputFocus} value={card.cvc}/>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'row', margin: '1em', paddingLeft: '2em'}}>
                                    <Typography sx={{paddingTop: '8px', paddingRight: '10px'}} variant='body2'><b>Expiry date</b></Typography>
                                    <Input name='YYMM' type='text' inputProps={{maxLength:4}}onChange={handleInputChange} onFocus={handleInputFocus} value={card.YYMM}/>
                                </Box>
                                <Box sx={{display:'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                                    <Box sx={{marginRight: '3em', marginTop: '1em'}}>
                                        <Button onClick={closeWallet} color='error' sx={{marginRight: '2em'}} variant='outlined' >Quit</Button>
                                        <Button onClick={confirmChangeWallet} color='success' variant='outlined'>Save</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                    </Box>

                </Modal>
               
                
            </Box>
        </>
    )
}

export default AccountBoard;
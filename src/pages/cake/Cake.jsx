import './Cake.css'
import { useNavigate } from 'react-router-dom'
import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import {OrbitControls, useGLTF} from '@react-three/drei'
import axios from 'axios'
import Last from "./Last"
import WedCake from './WedCake'





const Cake = () => {
    const [mesh,setMesh] = useState("#ffffff");
    const [scale, setScale] = useState(0);
    const [coreColor, setCoreColor] = useState('yellow')
    const [nucleus, setNucleus] = useState('');
    const navigate = useNavigate();
    const arr = [];
    const [formValues, setFormValues] = useState({cakeInfo: '', phone: '', name: ''});
   
   
      
   
  
  arr.push(mesh)
  arr.push(scale);
  arr.push(coreColor)
  arr.push(nucleus)
  const object = Object.values(formValues)
  
  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }
  
 
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    setFormValues({...formValues, cakeInfo: arr})
    if (object.every (item => item != '')) {
     
      await axios.post('http://localhost:3000/custom-order', formValues)
        navigate('/completed');
    }
    
    
  }
  
  
    return (
      
      <div className='Cake'>
        
  
        <h2 className='cakeTitle'>Make your cake</h2>
  
        <div className='parts'>
  
          <div className='rightPart'>
  
            <div className='last'>
              <Canvas className="canvas">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 3]} />
                <Suspense fallback={null}>
                  <Last customCore = {{coreColor: coreColor}}/>
                </Suspense>
              </Canvas>
            </div>
            <div className='wedCake'>
              <Canvas className="canvas">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 5]} />
                <Suspense fallback= {null}>
                  <WedCake customColors={{ mesh: mesh }}
                    customScale={{ scale: scale }}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
  
          <div className='leftPart'>
  
           
  
            <h4 className='title'>Cake's floor</h4>
            <div className='cakeFloors'>
              <div className='first' onClick={() => setScale(0)}> <img src='/img/tort1.png' /> </div>
              <div className='second' onClick={() => setScale(100)}> <img src='/img/tort2.png' /></div>
            </div>
  
            <h4 className='title'>Biscuit</h4>
            <div className='biscuit'>
              <div className='chocolate'onClick={() => setCoreColor('yellow')}> <img src='/img/sp.png' /> <span>Vanilla</span> </div>
              <div className='vanilla' onClick={() => setCoreColor('#964B00')} > <img src='/img/sh.png' /> <span>Chocolate</span></div>
              <div className='redVelvet' onClick={() => setCoreColor('red')}> <img src='/img/mr.png' /> <span>Red Velvet</span></div>
            </div>
  
            <h4 className='title'>nucleus</h4>
            <div className='nucleus'>
              <div className='walnut' onClick={() => setNucleus('walnut')}> <img src='/img/popoq_1.png' /> <span>With Walnuts</span></div>
              <div className='fruit' onClick={() => setNucleus('fruit')}> <img src='/img/mirg.png' /> <span>With Fruit</span> </div>
              <div className='meringue' onClick={() => setNucleus('meringue')}> <img src='/img/beze_1.png' /> <span>Meringue</span></div>
              <div className='withchocolate' onClick={() => setNucleus('chocolate')}> <img src='/img/shokolad_1.png' /> <span>Chocolate</span></div>
            </div>
  
            <h4 className='title'>color</h4>
            <div className='colors'>
              <button className='color1' onClick={() => setMesh('#b38f77')}></button>
              <button className='color2' onClick={() => setMesh('rgb(212, 145, 156)')}> </button>
              <button className='color3' onClick={() => setMesh('#b993e1')}> </button>
              <button className='color4' onClick={() => setMesh('#bcd3d8')}> </button>
              <button className='color5' onClick={() => setMesh('#f06767')}> </button>
            </div>
  
           <h4 className='title'>Other data:</h4>
           <form className='data'>
              <div className="nameInput">
                <p><strong>Name*</strong></p>
                <input type="text" name="name"  value={formValues.name} onChange = {handleChange} size="40" className="nameData" />
              </div>
  
              <div className="phoneInput">
                <p><strong>Phone*</strong></p>
                <input type="text" name="phone" value={formValues.phone} onChange = {handleChange} size="40" className="phoneData"/>
              </div>
           </form>
          
           <button onClick= {handleSubmit} className = 'btn'>Submit</button> 
  
          </div>
  
        </div>
  
    </div>
    
);
}


export default Cake
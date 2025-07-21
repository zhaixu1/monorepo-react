import React, {useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../components/Nvaigation/Navigation'
import Card from '../../components/Card'
import Tabs from '../Tabs'

type Props = {}

function Home({}: Props) {

  // 代表着 我切换后的目录，该不该隐藏
  const [hide, setHide] = useState<boolean>(true);

  const handleChange = (isHide: Boolean) => {
    console.log("isHide", isHide);
    
    setHide(isHide);
  }

  console.log("xxxxx")

  return (
    <div className='bg-slate-100'>
        <Navigation hide={hide} />
        <div className='mx-auto max-w-5xl flex my-2 px-2'>
          <Card className='w-2/3'>
            <Tabs onChange={handleChange} />
          </Card>
          <div className='w-1/3 flex flex-col flex-1'>
            <Card className='w-full' >
              1
            </Card>
            <Card className='w-full' >
              2
            </Card>
            <Card className='w-full' >
              3
            </Card>
          </div>
        </div>
    </div>
  )
}

export default Home

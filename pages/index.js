import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import CardNavBar from '../components/CardNavBar'
import SideBar from '../components/SideBar'
import styles from '../styles/Home.module.css'

const Dashboard = () =>{



  return(
    <div>
      <SideBar />
      
      <div className="dashboard-con">

          <div className="dashboard-card-con">
          <Card />
          </div>
    
      </div>
      </div>
  )
}

export default Dashboard
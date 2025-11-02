
import Button from '../components/Button'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

const Page5 = () => {
  return (
    <div className="w-full bg-gray-50 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Columbia Lawn Care Companies Leader Board</h2>
      <Carousel>
        {[1, 2, 3, 4, 5].map((i) => (
        <Card rank={1}
        name="Landscape Solutions"
        location="Indianapolis, IN"
        price={45}
        reliability={84}
        earnings={85749}
        lawnsMowed={82}
        hiredTimes={81}/>
        ))}
      </Carousel>
    </div>
  )
}

export default Page5
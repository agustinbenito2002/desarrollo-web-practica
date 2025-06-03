const Stadistics =({good,neutral,bad}) => {
const getall = () => good + neutral + bad
  const getaverage = () => getall()===0 ? 0 :  (good - bad )/getall()
  const getpositives = () => getall()===0 ? 0 :  good *100 /getall()


return (
    <>
    <h2>stadistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {getall()}</p>
      <p>average {getaverage()}</p>
      <p>positives {getpositives()} %</p>
    </>
)


}

  

export default Stadistics
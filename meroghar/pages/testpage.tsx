
type obj={
    name:string,
    age:number
}

const Nikan=()=>{
    return(
        <div>
            <h1>hello</h1>
            <ChildComponent name="nikan" age={10} />
            <button className="bg-sky-500  hover:bg-sky-700 py-2 px-4 rounded">
  Save changes
</button>
        </div>
        )
}



const ChildComponent=(props:obj):JSX.Element=>{
    return(
        <div>
            <h1>hello {props.name} of age {props.age}</h1>
          </div>
            )


}



export default Nikan
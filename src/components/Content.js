export default function Content({item}){
    return (
        <div className="content">
            <div className="image">
            <img src={item.url} width="70%" height="50%"/>
            </div>
            <div className="para">
                <h1>{item.head}</h1>
                <p>
                    {item.description}

                </p>
                <a>
                    {item.link}
                </a>
            </div>
        </div>
    )
}
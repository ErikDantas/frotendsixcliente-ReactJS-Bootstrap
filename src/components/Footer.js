


function footer(){
    return(
        <div className="row">
            <div className="col-12 bg-dark text-white fixed-bottom p-2 text-center">
                <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />Copyright - 2021
            </div>
        </div>
    )
}

export default footer;
import React from 'react'

export default function Users(props) {
  if (props.users.length === 0){
    props.setUsers({
      users: [
        {id: 1, photoUrl: 'https://abrakadabra.fun/uploads/posts/2022-01/1643018590_23-abrakadabra-fun-p-zhivie-oboi-mailz-morales-39.jpg' , followed: false, fullName: 'Dmitry', status: 'I am looking for a job', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2,  photoUrl: 'https://abrakadabra.fun/uploads/posts/2022-01/1643018590_23-abrakadabra-fun-p-zhivie-oboi-mailz-morales-39.jpg' , followed: true, fullName: 'Dasha', status: 'I have a job', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3,  photoUrl: 'https://abrakadabra.fun/uploads/posts/2022-01/1643018590_23-abrakadabra-fun-p-zhivie-oboi-mailz-morales-39.jpg' , followed: false, fullName: 'Nikita', status: 'I am looser', location: {city: 'Kiev', country: 'Ukraine'}},
]
    })
  }
  return (
    <div>
      {
        props.users.map(u =>
          <div key={u.id}>
           <span>
              <div>
                <img src={u.photoUrl} alt="icon" height={80} />
              </div>
              <div>
                {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
              </div>
            </span>
            <span>
              <span>
                <div>
                  {u.fullName}
                </div>
                <div>
                  {u.status}
                </div>
              </span>
              <span>
                <div>
                    {u.location.country}
                </div>
                <div>
                    {u.location.city}
                </div>
              </span>
            </span>
          </div>)
      }
    </div>
  )
}

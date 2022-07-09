import ButtonsOptions from "../../components/common/ButtonsOptions"
import useFetchGet from "../../hooks/useFetchGet"
import { Link } from 'react-router-dom'
import Header from "../../components/templetes/Header"

const Users = () => {

  const [users] = useFetchGet('/users')

  return (
    <main className="mw-grid">
      <Header />
      <section className="section_main">
        <div className="box_list_generel">
          {
            users.map(user => (
              <div key={user.id} className="item_list_general">
                <div>
                  <p className="title_item_list">{user.name || user.email.split('@')[0]}</p>
                  <p className="title_descrip_list">{user.email}</p>
                </div>
                <ButtonsOptions>
                  <Link to="/">Detalle usuario</Link>
                </ButtonsOptions>
              </div>
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default Users
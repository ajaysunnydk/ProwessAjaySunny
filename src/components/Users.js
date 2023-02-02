import Header from './Header'
import './style.css'
import './users.css'
function Users() {
    const rows = [
        {
            user: "sam",
            website: " ",
            affiliation: " ",
            country: " "
        },
        {
            user: "tim",
            website: " ",
            affiliation: " ",
            country: " "
        },
        {
            user: "kim",
            website: " ",
            affiliation: " ",
            country: " "
        }
    ]
    return (
        <div>
            <Header></Header>
            <div className="content-ctn">
                <h1 id="challenges">Users</h1>
                <section>
                    <div class="tbl-header">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Website</th>
                                    <th>Affiliation</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="tbl-content">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <tbody>

                                {
                                    rows.map(x => (
                                        <tr>
                                            <td><a style={{color:"#fff"}} href='#'>{x.user}</a></td>
                                            <td>{x.website}</td>
                                            <td>{x.affiliation}</td>
                                            <td>{x.country}</td>
                                        </tr>
                                    ))
                                }



                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        </div>
    )
}
export default Users
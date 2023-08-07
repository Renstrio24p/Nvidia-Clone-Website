

import Footer from "../js/footer";
import Navbar from "../js/navbar";
import RowList from "../js/rowlist";
import UniqueHash from "../security/HashCode";

export default function Webpage_Render() {
    // Get Render's ID
    const Nav = document.getElementById('navbar');
    const Row = document.getElementById('rowlist');
    const Foot = document.getElementById('footer');
   

    // Hash Applied
    window.addEventListener('DOMContentLoaded', () => {
       Foot.id = UniqueHash();
    })

    // Render's the JS Component
    Navbar(Nav);
    RowList(Row);
    Footer(Foot);
} 
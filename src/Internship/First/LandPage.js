import React from 'react'
import { useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './CSS/land.css';
import {getdomain} from '../Redux/action'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UseLoder from '../Loader/UseLoder';
import { useHistory } from "react-router-dom";
//do something...




export default function LandPage() {
        let history = useHistory();

        const [loader ,showloder,hideloder]=UseLoder();
      
        const [domain, setdomain] = useState({
                domainvalu:''
        });
        
        const dispatch=useDispatch();
        const clickhandler= (e)=>{
                e.preventDefault();
                console.log(domain.domainvalu);
                dispatch(getdomain(domain.domainvalu));
                setdomain({
                        domainvalu:''
                })
                showloder();

        }

        const post = useSelector(state => state.data.college)
        console.log(post);
        useEffect(() => {
                if(post.length >0)
                {
                        hideloder();
                        history.push("/sec");
                        
                        
                            

                }
                
        }, [post])
        
        
        return (
                <div  style={{"background":` linear-gradient(to top, #ffff 0%, #ffff 100%)`
                }}>
                        <Container className="cont" >
                                <div className="content">
                                        <h1>Lorem ipsum </h1>
                                        <p>
                                                Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit. Et dolorem placeat
                                                blanditiis cum excepturi nesciunt, natus
                                                nobis mollitia magnam aspernatur. Distinctio, veniam?
                                        </p>
                                        <Form className="searchmain" onSubmit={clickhandler} >
                                         <input type="text" placeholder="search your domain" value={domain.domainvalu} onChange={(e)=> setdomain({...domain,domainvalu:e.target.value})}/>
                                        <button><i className="fa fa-search"></i></button>
                                        </Form>
                                        {loader}
                                         
                                </div>
                                <div className="bg-cont">
                                        <svg id="bd66c7e1-f668-4518-8612-0b21a14b7195" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="630.61163" height="532.5" viewBox="0 0 630.61163 532.5"><polygon points="93.512 510.086 105.746 513.506 124.762 467.944 106.706 462.896 93.512 510.086" fill="#ffb8b8"/><path d="M373.74781,694.69751h39.92574a0,0,0,0,1,0,0v15.42585a0,0,0,0,1,0,0H387.62974a13.88193,13.88193,0,0,1-13.88193-13.88193v-1.54392A0,0,0,0,1,373.74781,694.69751Z" transform="translate(299.05821 1301.13898) rotate(-164.37997)" fill="#2f2e41"/><polygon points="239.451 519.667 252.155 519.666 258.196 470.666 239.447 470.667 239.451 519.667" fill="#ffb8b8"/><path d="M521.4237,699.786h39.92574a0,0,0,0,1,0,0v15.42585a0,0,0,0,1,0,0H535.30563a13.88193,13.88193,0,0,1-13.88193-13.88193V699.786A0,0,0,0,1,521.4237,699.786Z" transform="translate(798.14279 1231.199) rotate(179.99483)" fill="#2f2e41"/><polygon points="145.049 316.237 115.809 387.868 235.206 414.691 236.729 374.615 182.513 316.868 145.049 316.237" fill="#b3b3b3"/><circle cx="481.43241" cy="364.45203" r="27.29263" transform="translate(-400.50986 91.83598) rotate(-28.66321)" fill="#ffb8b8"/><path d="M500.934,496.02344,446.89,473.90039l-4.81176-31.72754A36.45558,36.45558,0,0,1,470.97573,400.917l7.14843-1.43554a36.79131,36.79131,0,0,1,32.94727,9.772,35.12661,35.12661,0,0,1,10.30688,31.60449,30.60008,30.60008,0,0,1-5.78149,13.47021c-16.97778,22.20167-14.79834,40.65772-14.77417,40.8418Z" transform="translate(-284.69418 -183.75)" fill="#f50057"/><path d="M522.93959,578.76465l-27.08471-43.07422,8.53076-78.35449-11.78418-58.60108.62646.01563A26.70383,26.70383,0,0,1,519.265,424.79883l11.46387,57.42383Z" transform="translate(-284.69418 -183.75)" fill="#2f2e41"/><path d="M523.55825,694.15381a4.946,4.946,0,0,1-4.844-3.97022l-11.866-59.00488a92.563,92.563,0,0,0-12.05151-30.52148l-33.48169-54.16162a1.72243,1.72243,0,0,0-3.05517.24414l-55.04712,132.2373a4.9562,4.9562,0,0,1-5.553,2.94434l-14.7052-2.998a4.924,4.924,0,0,1-3.88733-5.67188l11.99609-70.69775a182.47371,182.47371,0,0,1,12.41919-41.88916l40.627-93.89355,59.95507,19.69043,3.9563,41.98242L535.723,595.52246a45.98228,45.98228,0,0,1,3.3877,14.54834l5.11792,77.5249a4.96767,4.96767,0,0,1-4.531,5.2544l-15.73218,1.28711C523.829,694.148,523.693,694.15381,523.55825,694.15381Z" transform="translate(-284.69418 -183.75)" fill="#2f2e41"/><path d="M414.18532,597.97461l-19.00745-18.0415,35.92151-138.51758a58.06061,58.06061,0,0,1,34.16468-39.03076l.70532-.28711-1.91944,84.30468Z" transform="translate(-284.69418 -183.75)" fill="#2f2e41"/><path d="M475.07214,391.64694c-6.7427-5.83628-8.79338-16.7236-4.66183-24.75013s14.01047-12.34744,22.45774-9.82272c7.9559,2.37787,17.00017-5.55377,16.03091-14.05877s-11.54881-14.04517-18.7522-9.81991a30.51075,30.51075,0,0,0-32.52392,6.3346c-8.46306,8.29077-11.67367,21.84425-7.87434,33.24121S464.15309,392.79659,475.07214,391.64694Z" transform="translate(-284.69418 -183.75)" fill="#2f2e41"/><path d="M451.19692,613.46363a4.66266,4.66266,0,0,1-1.03329.26633l-43.39494,6.0576a4.67,4.67,0,0,1-5.02681-2.96278l-37.35282-97.19509a4.69015,4.69015,0,0,1,3.35629-6.26032l.00023-.00009,40.80846-9.10662a3.728,3.728,0,0,0,.90578-.33136l39.692-20.75223a4.64571,4.64571,0,0,1,.96491-.37553l43.68136-11.645a4.681,4.681,0,0,1,5.58631,2.84924l32.56935,84.74813a4.66674,4.66674,0,0,1-.61613,4.48382l-11.26374,15.126a4.68394,4.68394,0,0,1-2.07947,1.57648l-24.61611,9.46016a3.7085,3.7085,0,0,0-.51152.24314l-41.019,23.5089A4.68521,4.68521,0,0,1,451.19692,613.46363Z" transform="translate(-284.69418 -183.75)" fill="#fff"/><path d="M471.38654,484.11523l-5.547,1.47941L451.14,489.51513l-.02617.006-20.12476,10.5228-7.46846,3.90575-.00347.00133-11.21691,5.86409-.30761.0693L400.34017,512.483l-5.63163,1.25917-22.96944,5.1254,36.05914,93.82882,23.66978-3.303,5.80365-.81156,12.37-1.72874.14359-.0185,39.74931-22.78177,24.18458-9.29432,11.042-14.8275-31.38876-81.67614Z" transform="translate(-284.69418 -183.75)" fill="#e6e6e6"/><rect x="375.72439" y="514.49898" width="128.10654" height="5.70851" transform="translate(-441.01291 8.44503) rotate(-21.02215)" fill="#fff"/><rect x="382.55041" y="532.26085" width="128.10654" height="5.70851" transform="translate(-446.93028 12.07592) rotate(-21.02215)" fill="#fff"/><rect x="396.33897" y="568.13981" width="128.10654" height="5.70851" transform="translate(-458.88335 19.41031) rotate(-21.02215)" fill="#fff"/><polygon points="186.692 300.365 222.492 393.519 217.164 395.567 181.145 301.845 186.692 300.365" fill="#fff"/><polygon points="146.295 316.294 138.944 336.748 136.395 343.843 130.449 360.398 129.175 363.937 127.9 367.493 126.221 372.162 114.17 405.7 111.037 397.547 120.863 370.198 123.086 364.006 123.412 363.102 126.041 355.781 129.358 346.548 131.907 339.452 138.823 320.201 138.826 320.2 146.295 316.294" fill="#fff"/><polygon points="205.707 399.97 204.84 400.303 165.091 423.085 164.947 423.103 127.298 326.134 127.606 326.065 138.823 320.201 138.826 320.2 146.295 316.294 166.42 305.771 166.446 305.765 205.707 399.97" opacity="0.1"/><path d="M451.37605,613.93044a5.17988,5.17988,0,0,1-1.14313.29494l-43.39517,6.05769a5.16845,5.16845,0,0,1-5.56259-3.27893l-37.35282-97.19508a5.19044,5.19044,0,0,1,3.71417-6.92776l40.80846-9.10662a3.24307,3.24307,0,0,0,.78321-.28687l39.692-20.75223a5.16094,5.16094,0,0,1,1.06729-.4154l43.682-11.64475a5.17964,5.17964,0,0,1,6.18166,3.153l32.56935,84.74813a5.16511,5.16511,0,0,1-.68184,4.96207L520.475,578.66405a5.18258,5.18258,0,0,1-2.30116,1.74485l-24.61611,9.46016a3.21137,3.21137,0,0,0-.44252.21034L452.0964,613.58822A5.18984,5.18984,0,0,1,451.37605,613.93044ZM367.6219,514.96937a3.19083,3.19083,0,0,0-1.83267,4.12223L403.142,616.28668a3.1767,3.1767,0,0,0,3.41933,2.01544l43.39517-6.05769a3.20364,3.20364,0,0,0,1.14572-.39166l41.019-23.5089a5.20782,5.20782,0,0,1,.719-.34169l24.6161-9.46016a3.18755,3.18755,0,0,0,1.41451-1.07246l11.26369-15.12546a3.1746,3.1746,0,0,0,.41908-3.05012l-32.56936-84.74813a3.184,3.184,0,0,0-3.79956-1.93837L450.50312,484.2526a3.28983,3.28983,0,0,0-.65573.25514l-39.69255,20.75295a5.276,5.276,0,0,1-1.27381.466l-40.80869,9.10671A3.16512,3.16512,0,0,0,367.6219,514.96937Z" transform="translate(-284.69418 -183.75)" fill="#e6e6e6"/><polygon points="115.646 328.733 152.577 424.832 146.774 425.643 110.014 329.992 115.646 328.733" fill="#fff"/><circle cx="126.26773" cy="364.85865" r="2.66397" fill="#3f3d56"/><circle cx="220.72302" cy="367.69825" r="2.66397" fill="#f50057"/><path d="M506.4957,503.33252c3.02346,7.86728-.615,33.93912-1.89456,42.30813a1.52108,1.52108,0,0,1-2.46729.9482c-6.555-5.35812-26.71747-22.28309-29.74092-30.15037a18.26722,18.26722,0,1,1,34.10277-13.106Z" transform="translate(-284.69418 -183.75)" fill="#f50057"/><circle cx="204.75013" cy="326.1355" r="9.89474" fill="#fff"/><path d="M476.73436,488.53547a10.41983,10.41983,0,0,1,14.51564-6.6768l17.6639-15.96738,12.32141,8.36769-25.26156,22.19868a10.47632,10.47632,0,0,1-19.23939-7.92219Z" transform="translate(-284.69418 -183.75)" fill="#ffb8b8"/><path d="M505.1957,493.74707l-13.84619-18.791,31.5664-20.20263-22.62475-32.28418a13.082,13.082,0,0,1,19.53051-17.17188l28.32862,25.84619a23.72945,23.72945,0,0,1-3.32959,37.59766Z" transform="translate(-284.69418 -183.75)" fill="#2f2e41"/><path d="M396.71486,543.05087a10.41988,10.41988,0,0,0,1.44679-15.912l9.15293-21.98169L395.313,496.337l-12.48972,31.22394a10.47632,10.47632,0,0,0,13.8916,15.49Z" transform="translate(-284.69418 -183.75)" fill="#ffb8b8"/><path d="M402.89919,520.73145l-21.64636-5.041,16.13086-46.51514a76.2628,76.2628,0,0,1,12.13354-22.20556l26.31616-33.46436a14.71572,14.71572,0,0,1,23.2002,18.10938l-29.2013,37.68847Z" transform="translate(-284.69418 -183.75)" fill="#2f2e41"/><path d="M666.69418,716.25h-381a1,1,0,1,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-284.69418 -183.75)" fill="#ccc"/><path d="M814.48159,715.75h-9V188.25a4.5,4.5,0,0,1,9,0Z" transform="translate(-284.69418 -183.75)" fill="#e6e6e6"/><path d="M879.69418,716.25h-140a1,1,0,0,1,0-2h140a1,1,0,0,1,0,2Z" transform="translate(-284.69418 -183.75)" fill="#ccc"/><path d="M876.93154,252.75h-130.95a4.50507,4.50507,0,0,1-4.5-4.5v-38a4.50507,4.50507,0,0,1,4.5-4.5H876.94106a4.50953,4.50953,0,0,1,2.19287.5708l33.86475,18.89893a4.49979,4.49979,0,0,1,.01733,7.84912l-33.87427,19.10107A4.51272,4.51272,0,0,1,876.93154,252.75Z" transform="translate(-284.69418 -183.75)" fill="#f50057"/><path d="M864.98159,334.75h-130.95a4.51114,4.51114,0,0,1-2.21-.58008l-33.87451-19.10107a4.49978,4.49978,0,0,1,.01734-7.84912l33.86474-18.89893a4.50953,4.50953,0,0,1,2.19287-.5708H864.98159a4.50508,4.50508,0,0,1,4.5,4.5v38A4.50508,4.50508,0,0,1,864.98159,334.75Z" transform="translate(-284.69418 -183.75)" fill="#e6e6e6"/><path d="M865.48159,415.25h-130.95a4.51114,4.51114,0,0,1-2.21-.58008l-33.87451-19.10107a4.49978,4.49978,0,0,1,.01734-7.84912l33.86474-18.89893a4.50953,4.50953,0,0,1,2.19287-.5708H865.48159a4.50508,4.50508,0,0,1,4.5,4.5v38A4.50508,4.50508,0,0,1,865.48159,415.25Z" transform="translate(-284.69418 -183.75)" fill="#e6e6e6"/></svg>
                                         </div>

                        </Container>
                       

                </div>
        )
}
import React , {Component} from 'react';
// import {Form, Button} from 'react-bootstrap';
import classes from './Oman.module.css';
import Aux from '../../hoc/Auxliary';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

class Oman extends Component{
    render(){
        return(
           <Aux>
               <Header lien={true} />
               <div className={classes.AboutMain} >
                   <div className={classes.AboutTitle}>
                       <h1>سلطنة عمان ارض اللبان</h1>
                   </div>
                   <div className={classes.AboutContent}>
                       <p>
                         
من عمان انطلقت القوافل المحملة باللبان في رحلة برية شاقة بطول 2000 كيلومتر عبر الصحراء العربية - متجهة للإمبراطوريات المصرية والبابلية واليونانية والرومانية - بينما سافرت السفن المحملة بالراتنج لمسافات بعيدة. مثل الصين. كتب الروماني الموسوعي بليني الأكبر (23-79 م) أن التجارة جعلت العرب الجنوبيين "أغنى الناس على وجه الأرض".
يوجد في سلطنة عمان نوع واحد من اشجار اللبان واسمها العلمي (Boswellia sacra flueck) ، وتنتمي اشجار اللبان الى جنس يسمى (Boswellia) يوجد منه 25 نوعا منه فقط اربعة انواع منتجة لمادة اللبان وهو النوع العماني ونوع اخر هندي ونوعان اخران في منطقة القرن الافريقي طبعا هناك اختلافات على مستوى شكل الشجرة وشكل الاوراق.
أظهرت الدراسات تفوق اللبان العماني على الانواع الاخرى من حيث كمية المواد البيولوجية الفعالة التي يحتويها وتأثيراتها على العديد من الالتهابات وخصوصا تلك المرتبطة بجهاز المناعة.
من الناحية الطبية ، تم استخدام راتنج اللبان العماني في علاج كل مرض يمكن تخيله تقريبًا من قبل الأطباء اليونانيين والرومانيين ، كما تظهر العلاجات التي تستخدم اللبان في الكتاب السرياني للطب ، وفي نصوص الممارسين المسلمين في العصور الوسطى ، وفي كتابات الطب الهندي والصيني.
                       </p>
                   </div>
               
            
               </div>
                <Footer />
           </Aux> 
        );
    }
}

export default Oman;

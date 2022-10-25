import React , {Component} from 'react';
// import {Form, Button} from 'react-bootstrap';
import classes from './About.module.css';
import Aux from '../../hoc/Auxliary';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

class About extends Component{
    render(){
        return(
           <Aux>
               <Header lien={true} />
               <div className={classes.AboutMain} >
                   <div className={classes.AboutTitle}>
                       <h1>من نحن</h1>
                   </div>
                   <div className={classes.AboutContent}>
                       <p>لبان ظفار لتقطير اللبان ش.م.م شركة عمانية ذات خبرة عريقة في تطوير وتسويق منتجات شجرة اللبان الطبيعية التي تنمو في أودية الجزء الجنوبي من سلطنة عمان وتحديدا في محافظة ظفار . يقع المقر الرئيسي للشركة بمدينة صلالة القريبة من مواقع حصاد اللبان حيث يتم اختيار راتنجات اللبان الخاصة بنا بالتعاون مع حرفيين محليين يحصدون اللبان بطريقة يدوية من مواقعها الطبيعية التي تنمو فيها . خبرتنا العريقة في استخلاص مشتقات اللبان الطبيعية مبنية على طاقم ذو خبرة جيدة في تقطير اللبان للحصول على زيت اللبان العطري ومحلول ماء اللبان ومسحوق راتنج اللبان الناتج بعد التقطير كما نقوم بتطوير منتجات اللبان الطبيعية وادخالها في العديد من منتجات مواد التجميل التي تناسب كافة الاستخدامات.</p>
                   </div>
                   <div className={classes.AboutTitle}>
                       <h1>رسالتنا</h1>
                   </div>
                   <div className={classes.AboutContent}>
                       <p>نشر منتجات اللبان العماني للعالم اجمع لفوائده السحرية التي تعود لألاف السنين ، بالإضافة إلى الابتكارات المتعلقة بالصحة منذ أن أثبت فعاليته طبياً ،ويقوم طاقم لبان ظفار بالتعامل مع المجتمع المحلي في طريقة اختيار محصول اللبان عالي الجودة والمستخرج بطرق تقليدية لا تعرض أشجار اللبان للحصاد الجائر الذي يؤثر علي بيئة أشجار اللبان الطبيعية كما نقوم بتقطير اللبان عبر الطرق التقليدية مع الاستفادة من الخبرات العلمية لدينا لتطوير استخراج مكونات اللبان الطبيعية.

</p>
                   </div>
            
               </div>
                <Footer />
           </Aux> 
        );
    }
}

export default About;

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include('header.php') ?>
    <title>Contact Me | Amit Dhakal </title>
</head>


<body>



    <?php include('navbar.php'); ?>

    <?php
    $alert = '';
    if (isset($_REQUEST["name"])) {
        $name = $_REQUEST['name'];
        $phone = $_REQUEST['phone'];
        $email = $_REQUEST['email'];
        $subject = $_REQUEST['subject'];
        $message = $_REQUEST['message'];

        $to = 'dkamit01234@gmail.com';
        $subject = $subject;
        $message .= "<br/><br/> Name: " . $name . " <br/> Email: " . $email . "<br/>  Message: " . $message;
        $message .= "<br/><br/>Thank You ! <br/> ";
        $header = "From: " . $email . " \r\n";
        $header .= "MIME-Version: 1.0\r\n";
        $header .= "Content-type: text/html\r\n";
        mail($to, $subject, $message, $header);


        $alert = 'Thank for your Message';
        // header("Location: index.php");
        // exit();
    }
    ?>

    <section class="contact">
        <h1 class="heading"> contact <span>me</span> </h1>
        <div class="row">
            <div class="info-container">
                <h1>get in touch</h1>
                <p></p>
                <div class="box-container">
                    <div class="box">
                        <i class="fas fa-map"></i>
                        <div class="info">
                            <h3>Address :</h3>
                            <p>Kirtipur, kathmandu</p>
                        </div>
                    </div>
                    <div class="box">
                        <i class="fas fa-envelope"></i>
                        <div class="info">
                            <h3>Email :</h3>
                            <p><a href="mail:dkamit01234@gmail.com">dkamit01234@gmail.com</a></p>
                        </div>
                    </div>
                    <div class="box">
                        <i class="fas fa-phone"></i>
                        <div class="info">
                            <h3>Number :</h3>
                            <p>+977-9860551141</p>
                        </div>
                    </div>
                </div>
                <div class="share">
                    <a target="_blank" href="https://facebook.com/amit1dhakal" class="fab fa-facebook-f"></a>
                    <a target="_blank" href="https://twitter.com/amit1dhakal" class="fab fa-twitter"></a>
                    <a target="_blank" href="https://instagram.com/amit1dhakal" class="fab fa-instagram"></a>
                    <a target="_blank" href="https://linkedin.com/in/amit1dhakal" class="fab fa-linkedin"></a>
                </div>
            </div>
            <form method="get" action="contact.php">
                <div class="inputBox" style="color:white; font-size:15px;padding:5px;"> <?php echo $alert; ?> </div>
                <div class="inputBox">
                    <input type="text" name="name" placeholder="Full Name" required>
                    <input type="number" name="number" placeholder="Your Phone No." required>
                </div>
                <div class="inputBox">
                    <input type="email" name="email" placeholder="Email" required>
                    <input type="text" name="subject" placeholder="Subject" required>
                </div>
                <textarea name="message" placeholder="Message" id cols="30" rows="10" required></textarea>
                <div style="text-align: center;">
                    <input type="submit" value="Send Message" class="btn">
                </div>

            </form>
        </div>
    </section>

</body>

</html>
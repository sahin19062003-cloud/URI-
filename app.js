function sendOTP() {

  const phone = document.getElementById('phone').value;

  auth.signInWithPhoneNumber(phone, window.recaptchaVerifier)
    .then((confirmationResult) => {

      window.confirmationResult = confirmationResult;

      alert("OTP Sent Successfully");

    })
    .catch((error) => {
      alert(error.message);
    });
}

async function verifyOTP() {

  const otp = document.getElementById('otp').value;
  const password = document.getElementById('password').value;
  const referCode = document.getElementById('referCode').value;

  try {

    const result = await confirmationResult.confirm(otp);

    const user = result.user;

    const userId = "URI" + Math.floor(100000 + Math.random() * 900000);

    await db.collection('users').doc(user.uid).set({
      userId: userId,
      phone: user.phoneNumber,
      password: password,
      referCode: referCode,
      walletBalance: 0,
      usdtBalance: 0,
      createdAt: new Date()
    });

    alert("Registration Successful");

    window.location.href = "dashboard.html";

  } catch (error) {
    alert(error.message);
  }
}

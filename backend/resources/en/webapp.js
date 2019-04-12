'use strict';

module.exports = {
  navbar: {
    dashboard: 'Dashboard',
    my_profile: 'My profile',
    log_out: 'Log out',
    admin_dashboard: 'Admin dashboard'
  },
  order_content: {
    table_rows: {
      bank_name: 'Bank name:',
      iban: 'IBAN:',
      swift: 'SWIFT/BIC:',
      account_holder: 'Account holder:',
      status: 'Status:',
      payment_due: 'Payment due:',
      reference: 'Reference:',
      approx_coins: 'Approx coins:'
      // ['Bank name:', 'IBAN:', 'SWIFT/BIC:', 'Reference:', 'Account holder:']
    }
  },
  tx_content: {
    table_rows: {
      status: 'Status:',
      wallet_address: 'Wallet address:',
      valued_at: 'Valued at:',
      description: 'Description:'
    }
  },
  backoffice_tx_content: {
    table_rows: {
      status: 'Status:',
      wallet_address_to: 'Wallet address to:',
      valued_at: 'Valued at:',
      description: 'Description:',
      wallet_address_from: 'Wallet address from:'
    }
  },
  backoffice_order_content: {
    table_rows: {
      bank_name: 'Bank name:',
      iban: 'IBAN:',
      swift: 'SWIFT/BIC:',
      account_holder: 'Account holder:',
      user_email: 'User email:',
      status: 'Status:',
      payment_due: 'Payment due:',
      reference: 'Reference:',
      approx_coins: 'Approx coins:',
      full_name: 'Full name:'
      // ['Bank name:', 'IBAN:', 'SWIFT/BIC:', 'Reference:', 'Account holder:']
    }
  },
  dashboard: {
    header: {
      title: 'This is the total number of coins in your account.',
      sub_title: 'Current coins are valued at', // 44.8 fr
      buy_btn: 'BUY COINS',
      send_btn: 'SEND COINS'
    },
    order: {
      title: 'PROCESSING ORDERS',
      columns: {
        amount: 'Amount',
        date: 'Date',
        status: 'Status',
        actions: 'Actions'
      }
    },
    tx: {
      title: 'TRANSACTIONS HISTORY',
      columns: {
        amount: 'Amount',
        date: 'Date',
        status: 'Status',
        actions: 'Actions'
      }
    },
    sidebars: {
      wallet_address: {
        title: {
          part1: 'Your',
          part2: 'wallet address'
        },
        text: {
          part1: 'You can receive',
          part2: 'coins by giving the sender the following address:'
        },
        cpy: 'Click to copy'
      },
      become_validator: {
        title: 'How to become a validator?',
        text: {
          part1: 'In order to become a validator you need to have more than',
          // 10.000
          // ???
          part2: 'coins in your account (X% of total available tokens).'
        }
      },
      need_assistance: {
        title: 'Need assistance?',
        text: {
          part1: 'If you ever happen to need some guidance, don’t hesitate to',
          part2: 'get in touch',
          part3: 'with us.'
        }
      }
    }
  },
  buy_coins: {
    header: {
      title: 'Buy coins',
      sub_title: 'Your current balance:'
      // 0 CTX
    },
    steps: {
      payment_method: {
        title: 'Your payment method',
        text: {
          part1: 'Choose your preffered payment method to buy',
          part2: 'coins:'
        }
      },
      enter_amount: {
        title: 'Enter the amount in',
        text: {
          part1: 'Current value of',
          // CTX
          part2: 'coin is',
          // 41.89 Fr.
          part3: 'If you buy more than',
          // 169,351
          part4: 'coins, you will be submitted to further profile verification.'
        },
        input_min: 'Min. is',
        // 10.000,00 CHF
        input_coins_get: 'Number of coins you get',
        next_btn: 'NEXT'
      },
      confirm: {
        title: 'Confirm purchase',
        text: {
          part1: 'You are about to buy',
          // 118,013 CTX
          part2: 'coins valued at',
          // 93,21 Fr,
          par3: 'per coin. Your total payment is',
          // 11.000,00 CHF
          part4: 'and it needs to be paid within the',
          part5: 'next 72h',
          part6: 'or the order will be cancelled.Below are the bank details for the money transfer, please make sure that you have filled in the proper',
          part7: 'reference number.'
        },
        table_rows: {
          row1: 'Bank name:',
          row2: 'IBAN:',
          row3: 'SWIFT/BIC:',
          row4: 'Reference:',
          row5: 'Account holder:'
          // ['Bank name:', 'IBAN:', 'SWIFT/BIC:', 'Reference:', 'Account holder:']
        },
        note: {
          part1: 'Note:',
          part2: 'Reference number that you have to fill when making a payment is linked to this order and your account, so please be sure to use the right one shown above',
          // (110118).
        },
        order_btn: 'PLACE YOUR ORDER'
      }
    },
    sidebars: {
      how_to_buy: {
        title: {
          part1: 'How to buy',
          // CTX
          part2: 'coins?'
        },
        text: {
          part1: 'In the first step, you are asked to choose your preffered payment method (Swiss franc, Bitcoin or Ethereum).',
          part2: 'Based on the entered amount, we’ll calculate the approx. number of coins you’ll get for your purchase, followed by payment instructions.'
        }
      },
      what_is_KYC: {
        title: 'What is KYC?',
        text: {
          part1: 'Since the minimum token amount for validators is more than',
          // 220,000CTX
          part2: '- you’ll need to go through KYC process.',
          part3: 'Basically, this means that in order to know our customers, we’ll ask for some additional documents to be able to verify your identity. This will help us to run a trusted and secured platform for our coins.'
        }
      },
      need_assistance: {
        title: 'Need assistance?',
        text: {
          part1: 'If you ever happen to need some guidance, don’t hesitate to',
          part2: 'get in touch',
          part3: 'with us.'
        }
      }
    },
    end_message: {
      title: 'Order successfully placed',
      // 10 CHF
      text: 'order has been placed on',
      // 15.3.2017. - 15:06h
      buy_btn: 'BUY MORE COINS'
    }
  },
  send_coins: {
    header: {
      title: 'Send coins',
      text: 'Your current balance:'
      // 0 CTX
    },
    steps: {
      select_amount: {
        title: 'Select the amount',
        text: 'Please choose the amount you want to send to the external address:',
        input_from: 'Max.amount',
        // 0 CTX
        input_to: 'Value in',
        // CHF
        next_btn: 'NEXT'
      },
      wallet_address: {
        title: 'Wallet address',
        text: {
          part1: 'Enter the address to which you want to send',
          // 213123 CTX
          part2: ':'
        },
        input_address: 'wallet address',
        note: {
          part1: 'Note:',
          part2: 'Please use only',
          // CTX
          part3: 'cryptocurrency wallets for now. It’s up to you to whom you are sending coins, so be careful when entering the address above.'
        },
        next_btn: 'NEXT'
      },
      transaction_description: {
        title: 'Transaction description',
        text: 'As an optional step, feel free to enter some notes for this transaction so you can easily search for it later:',
        input_description: 'Description',
        next_btn: 'NEXT'
      },
      confirmation: {
        title: 'Confirmation',
        text: {
          part1: 'You are about to send',
          // CTX
          part2: 'coins to some other hot wallet account. Please double check all the information you entered before confirming transaction:'
        },
        table: {
          row1: 'Recipient address:',
          row2: 'Amount of coins:',
          row3: 'Currently valued at:',
          row4: 'Transaction fee:',
          row5: 'Total:'
        },
        confirm_btn: 'CONFIRM'
      },
      verification: {
        title: '2-Step Verification',
        text: 'For the last step, please enter the verification code generated by your mobile application below:',
        input_description: 'Enter six digit code from the app above',
        send_coins_btn: 'SEND COINS'
      }
    },
    sidebars: {
      how_to_buy: {
        title: {
          part1: 'How to buy',
          // CTX
          part2: 'coins?'
        },
        text: {
          part1: 'In the first step, you are asked to choose your preffered payment method (Swiss franc, Bitcoin or Ethereum).',
          part2: 'Based on the entered amount, we’ll calculate the approx. number of coins you’ll get for your purchase, followed by payment instructions.'
        }
      },
      what_is_KYC: {
        title: 'What is KYC?',
        text: {
          part1: 'Since the minimum token amount for validators is more than',
          // 220,000 CTX
          part2: '- you’ll need to go through KYC process.',
          part3: 'Basically, this means that in order to know our customers, we’ll ask for some additional documents to be able to verify your identity. This will help us to run a trusted and secured platform for our coins.'
        }
      },
      need_assistance: {
        title: 'Need assistance?',
        text: {
          part1: 'If you ever happen to need some guidance, don’t hesitate to',
          part2: 'get in touch',
          part3: 'with us.'
        }
      }
    },
    end_message: {
      title: 'successfully sent',
      text: 'Your current balance:',
      // 973424.59 CTX
      send_btn: 'Send more coins?'
    }
  },
  my_profile: {
    account: {
      title: 'ACCOUNT',
      text: {
        first_name: 'First name',
        last_name: 'Last name',
        email: 'E-mail',
        registry_number: 'Trade registy number',
        password: 'Password',
        repeat_password: 'Repeat Password'
      }
    },
    contact_information: {
      title: 'CONTACT INFORMATION',
      text: {
        address: 'Address',
        zip_code: 'Zip Code',
        select_country: 'Select country',
        country_code: 'Country code',
        document_type: 'Document type',
        id_number: 'ID Number',
        city: 'City',
        phone_number: 'Mobile phone number'
      }
    },
    sidebars: {
      user_data_change: {
        change_password_btn: 'CHANGE PASSWORD',
        two_step_btn: '2-STEP AUTH',
        text: {
          part1: 'If you ever happend to need some assistance don’t hestitate to',
          part2: 'get in touch',
          part3: 'with us.'
        }
      },
      how_to_receive: {
        title: 'How to receive coins?',
        text: {
          part1: 'You can receive',
          part2: 'coins by giving the sender the following address:'
        }
      },
      become_validator: {
        title: 'How to become a validator?',
        text: {
          part1: 'In order to become a validator you need to have more than',
          // 10.000
          part2: 'coins in your account (X% of total available tokens).'
        }
      }
    },
    change_password: {
      title: 'Change password',
      input_old_password: 'Old password',
      input_new_password: 'New password',
      input_repeat_new_password: 'Repeat new password',
      change_btn: 'Change',
      success: {
        title: 'Password successfully changed!',
        text: 'You have successfully changed your password',
        close_btn: 'Close'
      },
      failed: {
        title: 'Whooops. Unable to change your password.',
        text: 'For some reason we were unable to change your password. Please try again.',
        dont_btn: 'DON’T CHANGE',
        try_again_btn: 'TRY AGAIN'
      }
    },
    change_totp: {
      title: 'Change 2-step authentication',
      text: 'Enter the old verification code generated by your mobile application below to set a new authentification code: ',
      input_description: 'Authentication code',
      verify_btn: 'Verify',
      change: {
        title: 'Change 2-step authentication',
        text: 'If you are unable to scan a QR code, enter this secret code in your two-step auth app instead:',
        input_copy: 'Click to copy',
        input_tfa: 'Enter six digit code from the app above',
        change_btn: 'Change'
      },
      success: {
        title: '2-step authentication successfully changed!',
        text: 'You have successfully changed your 2-step authentication code',
        close_btn: 'Close'
      },
      failed: {
        title: 'Whooops. Unable to change your 2-step authentication.',
        text: 'For some reason we were unable to change your 2-step authentication. Please try again.',
        dont_btn: 'DON’T CHANGE',
        try_again_btn: 'TRY AGAIN'
      }
    },
    save_changes_btn: 'SAVE CHANGES'
  },
  register_buy_coin: {
    welcome: {
      title: {
        part1: 'Welcome,',
        // Name
        part2: '!'
      },
      text: {
        part1: 'We haven’t linked any',
        // CTX
        part2: 'coins with your account yet.',
        part3: 'To proceed to',
        //CompanyX
        part4: 'dashboard, you would need to buy some at the current approx value at ',
        // 41.89 Fr.
        part5: 'Well done!'
      }
    }
  },
  welcome: {
    header: {
      login_btn: 'Login',
      register_btn: 'REGISTER NOW'
    },
    title: {
      part1: 'THE BEAUTY OF',
      part2: 'SIMPLICITY'
    },
    text: 'Here goes some additional copy and messaging. We’ll work on that later, for now only important thing here is being able to register. Everything else is marketing thing.',
    white_paper_btn: 'WHITEPAPER',
    learn_more_btn: 'Learn more...'
  },
  login: {
    input_email: 'Email',
    password: 'Password',
    login_btn: 'LOGIN',
    password_forgotten_btn: 'Password forgotten?'
  },
  login_totp: {
    title: '2-Step Verification',
    text: 'Enter the verification code generated by your mobile application below.',
    input_code: 'Authentication code',
    verify_btn: 'VERIFY',
    back_to_login_btn: 'Back to login',
    help_btn: 'Need help?'
  },
  password_forgotten: {
    title: 'Password forgotten',
    input_new_password: 'New password',
    input_repeat_new_password: 'Repeat new password',
    text: 'Enter your email to get futher instructions.',
    input_email: 'Email',
    send_btn: 'SEND',
    something_went_wrong: 'Something went wrong'
  },
  two_factor_forgotten: {
    title: 'Two factor authentication forgotten',
    text: 'If you are unable to scan a QR code, enter this secret code in your two-step auth app instead:',
    input_copy: 'Click to copy',
    input_tfa: 'Enter six digit code from the app above',
    send_btn: 'SEND',
    something_went_wrong: 'Something went wrong'
  },
  register1: {
    information: {
      title: 'Let’s create your account',
      text: {
        part1: 'With the',
        //companyX 
        part2: 'account, you’ll be able to buy and manage your',
        part3: 'coins within our dashboard.',
        part4: 'Please fill out all necessary details on the right side.'
      },
      step: 'Step 1'
    },
    back_btn: 'Back',
    fields: {
      first_name: 'First name',
      last_name: 'Last name',
      email: 'E-mail',
      password: 'Password',
      repeat_password: 'Repeat password'
    },
    next_btn: 'NEXT'
  },
  register2: {
    information: {
      title: 'Just a few more information...',
      text: {
        part1: 'Please provide more details such as your address, phone number and passpord ID or trade registry number.',
        part2: 'We’re building a trusted community of members, that’s why we ask for these.'
      },
      step: 'Step 2'
    },
    back_btn: 'Back',
    fields: {
      address: 'Address',
      zip_code: 'Zip code',
      city: 'City',
      select_country: 'Select country',
      country_code: 'Country code',
      mobile: 'Mobile phone number',
      document_type: 'Document type',
      id_number: 'ID Number'
    },
    next_btn: 'NEXT'
  },
  register3: {
    information: {
      title: 'Almost there, we promise!',
      text: {
        part1: 'Please download 2FA app to verify your profile. Something like',
        part2: 'Authy app',
        part3: ', or',
        part4: 'Chrome add-on',
        part5: 'will be good enough. After scanning the QR code on the right, you’ll be provided with six digit code in the app.',
      },
      step: 'Step 3: Last one...'
    },
    back_btn: 'Back',
    fields: {
      text: 'If you are unable to scan a QR code, enter this secret code in your two-step auth app instead:',
      input_copy: 'Click to copy',
      input_code: 'Enter six digit code from the app above',
      agree_btn: 'I agree to Terms of Service',
      terms_error: 'Please agree Terms of service',
      questionnaire_btn: {
        part1: 'I acknowledge that this company, token, web application is governed by Swiss legislation.',
        part2: ' I confirm, that I am not a citizen, national, resident (tax or otherwise) of any jurisdiction which prohibits the possession, dissemination, communication of the Whitepaper and/or prohibits the offering, purchase, possession, exchange of',
        // CTX
        part3: 'Tokens.',
        part4: 'I am aware that during the Initial Distribution I am entitled to buy no more than',
        // KYC CTX
        part5: 'Tokens without being submitted to further KYC (Know Your Customer) procedures.'
      }
    },
    finish_btn: 'FINISH'
  },
  admin_navbar: {
    admin: 'ADMIN',
    orders: 'Orders',
    users: 'Users',
    transactions: 'Transactions',
    log_out: 'Log out',
    switch: 'Switch to',
    holder: 'Holder dashboard'
  },
  admin_header: {
    search: 'Type to search...',
    from_date: 'From date',
    to_date: 'To date'
  },
  admin_orders: {
    title: 'PROCESSING ORDERS',
    columns: {
      amount: 'Amount',
      date: 'Date',
      status: 'Status',
      actions: 'Actions'
    },
    execute: {
      name: 'Execute',
      on_click: {
        title: 'Execute order and transfer coins?',
        text: {
          part1: 'You are about to sell',
          // 12 CTX
          part2: 'for',
          // 502.68 CHF.
          part3: 'Please confirm and that amoun of tokens will be transfered to',
          // stasda dsa’s -- name
          part4: '’s',
          part5: 'account.'
        },
        confirm_btn: 'CONFIRM ORDER',
        confirm_order: {
          title: 'Please confirm the order',
          text: 'Enter the verification code generated by your mobile application below to confirm order:',
          input_code: 'Authentication code',
          execute_order_btn: 'EXECUTE ORDER'
        }
      },
      email_sending_success: {
        title: 'Well done! Order executed.',
        // Vladimir
        text: 'Order successfully executed!',
        close_btn: 'CLOSE'
      },
      email_sending_failure: {
        title: 'Whooops. Unable to execute order.',
        dont_send_btn: 'DON’T EXECUTE',
        again_btn: 'TRY AGAIN'
      }
    }
  },
  admin_users: {
    title: 'USERS',
    columns: {
      name: 'Full name',
      email: 'Email',
      phone_number: 'Phone number',
      actions: 'Actions'
    },
    on_click_user: {
      id_user: 'User id:',
      name: 'Full name:',
      country: 'Country:',
      zip: 'Zip code:',
      document_type: 'Document type:',
      email: 'Email:',
      phone_number: 'Phone number:',
      address: 'Address:',
      city: 'City:',
      id_number: 'Id number:'
    },
    on_click_actions: {
      resend_mail_confirmation: {
        name: 'Resend email',
        on_click: {
          title: 'Resend confirmation email?',
          text: {
            part1: 'You are about to resend confirmation email for'
            // Stefan Burscher stefan.burscher@mvpworkshop.co
          },
          confirm_btn: 'CONFIRM AND RESEND'
        },
        email_sending_failure: {
          title: 'Whooops. Unable to send e-mail.',
          text: 'For some reason we were unable to resend confirmation email. Please try again.',
          dont_send_btn: 'DON’T SEND',
          again_btn: 'TRY AGAIN'
        },
        email_sending_success: {
          title: 'Well done! Email sent.',
          // name
          text: 'should receive confirmation e-mail.',
          close_btn: 'CLOSE'
        }
      },
      enable_disable: {
        name: 'Enable/Disable',
        enable_confirm: {
          title: 'Please confirm user enabling',
          text: {
            part1: 'Are you sure you want to enable',
            // V M’s (vladam.bg@gmail.com)
            part2: 'account?'
          },
          enable_btn: 'ENABLE USER'
        },
        disable_confirm: {
          title: 'Please confirm user disabling',
          text: {
            part1: 'Are you sure you want to disable',
            // V M’s (vladam.bg@gmail.com)
            part2: 'account?'
          },
          disable_btn: 'DISABLE USER'
        },
        disable_error: {
          title: 'Whooops. Unable to disable user.',
          text: 'For some reason we were unable to disable user. Please try again.',
          dont_send_btn: 'DON’T DISABLE',
          again_btn: 'TRY AGAIN'
        },
        disable_success: {
          title: 'Well done! User disabled.',
          text: 'is disabled!',
          close_btn: 'CLOSE'
        },
        enable_error: {
          title: 'Whooops. Unable to enable user.',
          text: 'For some reason we were unable to enable user. Please try again.',
          dont_send_btn: 'DON’T ENABLE',
          again_btn: 'TRY AGAIN'
        },
        enable_success: {
          title: 'Well done! User enabled.',
          text: 'is enabled!',
          close_btn: 'CLOSE'
        }
      },
      reset_password: {
        name: 'Reset password',
        on_click: {
          title: 'Send reset password email',
          text: {
            part1: 'You are about to send password reset email for'
            // Stefan Burscher stefan.burscher@mvpworkshop.co
          },
          confirm_btn: 'CONFIRM'
        },
        email_sending_failure: {
          title: 'Whooops. Unable to send e-mail.',
          text: 'For some reason we were unable to send password reset email. Please try again.',
          dont_send_btn: 'DON’T SEND',
          again_btn: 'TRY AGAIN'
        },
        email_sending_success: {
          title: 'Well done! Email sent.',
          // name
          text: 'should receive confirmation e-mail.',
          close_btn: 'CLOSE'
        }
      },
      reset_totp: {
        name: 'Reset 2FA',
        on_click: {
          title: 'Send reset 2FA email',
          text: {
            part1: 'You are about to send 2FA reset email for'
            // Stefan Burscher stefan.burscher@mvpworkshop.co
          },
          confirm_btn: 'CONFIRM'
        },
        email_sending_failure: {
          title: 'Whooops. Unable to send e-mail.',
          text: 'For some reason we were unable to send 2FA reset email. Please try again.',
          dont_send_btn: 'DON’T SEND',
          again_btn: 'TRY AGAIN'
        },
        email_sending_success: {
          title: 'Well done! Email sent.',
          // name
          text: 'should receive confirmation e-mail.',
          close_btn: 'CLOSE'
        }
      }
    }
  },
  backoffice_rolepicker: {
    title: 'Choose the dashboard',
    text: 'We’ve detected that your account has multiple roles. In order to ease up your login process, please select to which dashboard you want to log in.',
    admin_panel: {
      title: 'Admin panel',
      text: 'Manage your creator’settings'
    },
    holder_dashboard: {
      title: 'Holder dashboard',
      text: 'Manage coins and holder profile'
    }
  },
  something_went_wrong: {
    title: 'Ooops, can’t find what you are looking for',
    text: 'We can’t seem to find the page you’re looking for. It may be that this page doesn’t exist or that something went wrong. Please try refreshing the page, or go to the dashboard.'
  },
  resend_mail_order: {
    name: 'Resend email',
    on_click: {
      title: 'Resend email with instructions?',
      text: {
        part1: 'You are about to resend payment instructions for the order made on the date',
        // 24.5.2018.
        part2: 'at',
        // 00:15h. stasda dsa
        part3: 'will receive instructions at'
        // stefan.burscher@gmail.com
      },
      confirm_btn: 'CONFIRM AND RESEND'
    },
    email_sending_failure: {
      title: 'Whooops. Unable to send e-mail.',
      text: 'For some reason we were unable to resend email with payment instructions. Please try again.',
      dont_send_btn: 'DON’T SEND',
      again_btn: 'TRY AGAIN'
    },
    email_sending_success: {
      title: 'Well done! Email sent.',
      // name
      text: 'should receive e-mail with the payment instructions within a few minutes.',
      close_btn: 'CLOSE'
    }
  },
  misc: {
    loading: 'Loading',
    list_is_empty: 'List is empty',
    cancel: 'Cancel',
    details: 'Details',
    learn_more_btn: 'Learn more...'
  },
  enums: {
    order_status: {
      UNKNOWN: 'Unknown',
      CREATED: 'Order created',
      WAITING: 'Waiting for payment',
      CANCELLED: 'Order canceled',
      COMPLETED: 'Order completed',
      PRECREATED: 'Order precreated'
    },
    transaction_status: {
      UNKNOWN: 'Unknown',
      SENDING: 'Sending', // sending using web3 client, expecting reply
      SENT: 'Sent to the chain', // tx hash received, transaction sent to chain
      FAILED: 'Failed', // tx failed: logs[] empty
      SUCCEEDED: 'Successful' // tx succeded, logs[] exist
    }
  },
  email_not_confirmed: {
    title: 'VERIFY YOUR E-MAIL',
    text: 'Please check your inbox and click on the link in the e-mail we’ve sent to you.',
    status: {
      done: 'Done',
      done_with_error: 'Done with error',
      sending: 'Sending...',
      resend: 'Resend'
    }
  },
  email_confirmed_error: {
    title: 'OOOPS! SOMETHING WENT WRONG.',
    text: 'Please try again and click on the link in the meail we’ve sent to you.'
  },
  email_confirmed: {
    title: 'Thanks!',
    text: 'Your email has successfully been verified and your registration completed.'
  },
  validation_errors: {
    req: 'required field',
    num: 'filed must be number',
    fn_req: 'first name is required',
    fn_long: 'first name is too long',
    ln_req: 'last name is required',
    ln_long: 'last name is too long',
    mail_req: 'email is required',
    mail_long: 'too many characters',
    mail_already_use: 'This email is already in use!',
    mail_valid: 'email must be valid',
    pass_req: 'password is required',
    pass_min: 'password must have at least 8 characters',
    pass_equal: 'Passwords must be equal!',
    pass_digits: 'Passwords must contain digits!',
    pass_non_digits: 'Passwords can not contain only digits!',
    pass_incorrect: 'password is incorrect',
    address_req: 'address is required',
    address_long: 'too many characters',
    zip_req: 'zip is required',
    zip_long: 'too many characters',
    city_req: 'city is required',
    city_alpha: 'city can’t contain number',
    city_long: 'too many characters',
    country_req: 'country is required',
    country_alpha: 'city can’t contain number',
    country_long: 'too many characters',
    country_invalid: 'country is invalid',
    code_req: 'country code is required',
    code_long: 'too many characters',
    code_invalid: 'country code is invalid',
    phone_req: 'phone number is required',
    phone_long: 'too many characters',
    document_req: 'document type is required',
    document_invalid: 'document id is invalid',
    id_number_req: 'document number is required',
    id_number_long: 'document number length is too big',
    token_req: '2FA is required',
    token_auth: 'Two Factor authentication failed!',
    token_secret: '2FA secret is empty',
    token_bad: 'bad token',
    from_req: 'from address is required',
    from_long: 'too many characters',
    from_valid: 'address is not valid',
    to_req: 'to address is required',
    to_long: 'too many characters',
    to_valid: 'address is not valid',
    amount_req: 'amount is required',
    amount_min: 'must be number greater than',
    amount_min_fee: 'must be number greater than',
    amount_not_enough: 'there is not enough tokens',
    amount_invalid: 'amount is invalid',
    desc_long: 'description length is too long',
    currency_exist: 'currency doesnt exist',
    sort_order_req: 'sort order is required',
    sort_order_invalid: 'sort order is invalid',
    sort_column_req: 'sort column is required',
    sort_column_invalid: 'sort column is invalid',
    offset_req: 'offset is required',
    offset_invalid: 'offset is invalid',
    limit_req: 'limit is required',
    limit_invalid: 'limit is invalid',
    currency_invalid: 'currency is invalid',
    currency_req: 'currency is required',
    data_invalid: 'date is invalid',
    old_pass_incorrect: 'old password is incorrect',
    hash_req: 'hash is required',
    invalid_hash: 'hash is invalid',
    confirm_not_a_robot: 'Please confirm that you are not a robot',
    name_non_digits: 'Name can not contain only digits!',
    last_name_non_digits: 'Last name can not contain only digits!',
    address_non_digits_non_digits: 'Address can not contain only digits!',
    phone_only_number: 'Phone number must contain only numbers',
    from_to_same: 'sender and receiver cannot be the same'
  }
};

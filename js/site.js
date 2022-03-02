'use strict';

var vci_conf = {
  /* section 01 div: */
  'section_01_element': document.getElementById('section_01'),
  /* section 01 default element to focus: */
  'section_01_focus': document.getElementById('section_01_in_01_07'),
  /* section 01 select elements: */
  'section_01_selects': {
    '01': {
      'elements': document.getElementsByName('section_01_in_01_select'),
      'action': check_section_01,
      'value_element_a': document.getElementById('section_01_in_01_value_a'),
      'value_element_b': document.getElementById('section_01_in_01_value_b'),
      'value_element_c': document.getElementById('section_01_in_01_value_c'),
      'value': null,
      'use_value': [true]
    },
    '02': {
      'elements': document.getElementsByName('section_01_in_02_select'),
      'action': check_section_01,
      'value_element_a': document.getElementById('section_01_in_02_value_a'),
      'value_element_b': document.getElementById('section_01_in_02_value_b'),
      'value_element_c': document.getElementById('section_01_in_02_value_c'),
      'value': null,
      'use_value': [true]
    },
    '03': {
      'elements': document.getElementsByName('section_01_in_03_select'),
      'action': check_section_01,
      'value_element_a': document.getElementById('section_01_in_03_value_a'),
      'value_element_b': document.getElementById('section_01_in_03_value_b'),
      'value_element_c': document.getElementById('section_01_in_03_value_c'),
      'value': null,
      'use_value': [6]
    }
  },
  /* section 01 status: */
  'section_01_ok': false,
  /* section 01 next button: */
  'section_01_next': document.getElementById('section_01_next'),
  /* section 02 div: */
  'section_02_element': document.getElementById('section_02'),
  /* section 02 default element to focus: */
  'section_02_focus': document.getElementById('section_02_in_01_06'),
  /* section 02 select elements: */
  'section_02_selects': {
    '01': {
      'elements': document.getElementsByName('section_02_in_01_select'),
      'action': check_section_02,
      'value_element_a': document.getElementById('section_02_in_01_value_a'),
      'value_element_b': document.getElementById('section_02_in_01_value_b'),
      'value_element_c': document.getElementById('section_02_in_01_value_c'),
      'value_element_txt': document.getElementById('vci_value_sw'),
      'value_element_aa': document.getElementById('vci_value_sw_a'),
      'value_element_bb': document.getElementById('vci_value_sw_b'),
      'value_element_cc': document.getElementById('vci_value_sw_c'),
      'value': null,
      'use_value': [false]
    },
    '02': {
      'elements': document.getElementsByName('section_02_in_02_select'),
      'action': check_section_02,
      'value_element_a': document.getElementById('section_02_in_02_value_a'),
      'value_element_b': document.getElementById('section_02_in_02_value_b'),
      'value_element_c': document.getElementById('section_02_in_02_value_c'),
      'value_element_txt': document.getElementById('vci_value_ohc'),
      'value_element_aa': document.getElementById('vci_value_ohc_a'),
      'value_element_bb': document.getElementById('vci_value_ohc_b'),
      'value_element_cc': document.getElementById('vci_value_ohc_c'),
      'value': null,
      'use_value': [false]
    }
  },
  /* valculate vci button: */
  'calculate_vci_button': document.getElementById('calculate_vci'),
  /* vci value div: */
  'vci_value_element': document.getElementById('vci_value'),

  /* vci score background colors: */
  'vci_bgcolors': {
    '6': '#7a0c37',
    '5': '#b20535',
    '4': '#e36c0a',
    '3': '#e36c0a',
    '2': '#f5ec82',
    '1': '#f5ec82',
    '0': '#c2d69b'
  },
  /* vci score text colors: */
  'vci_colors': {
    '6': '#ffffff',
    '5': '#ffffff',
    '4': '#ffffff',
    '3': '#ffffff',
    '2': '#000000',
    '1': '#000000',
    '0': '#000000'
  },


  /* overall values: */
  'values': [],
  'vci_value': null
};

/* values getting / updating function: */
function update_values() {
  /* init empty array for new values: */
  var new_values = [];
  /* get section 01 select elements: */
  var section_01_selects = vci_conf['section_01_selects'];
  /* loop through select elements: */
  for (const section_01_select in section_01_selects) {
    /* this selector: */
    var my_select = section_01_selects[section_01_select];
    /* get value: */
    var my_values = my_select['value'];
    /* loop through any values: */
    if ((my_values != null) && (my_values.length > 0)) {
      for (var i = 0; i < my_values.length; i++) {
        var my_value = my_values[i];
        /* if value is an integer ... : */
        if (Number.isInteger(my_value)) {
          /* if the value should be used: */
          if ((my_select['use_value'].indexOf(my_value) > -1) ||
              (my_select['use_value'].indexOf(true) > -1)) {
            /* store the value; */
            new_values.push(my_value);
          };

        };
      };
    };
  };
  /* get section 02 select elements: */
  var section_02_selects = vci_conf['section_02_selects'];
  /* loop through select elements: */
  for (const section_02_select in section_02_selects) {
    /* this selector: */
    var my_select = section_02_selects[section_02_select];
    /* get value: */
    var my_values = my_select['value'];
    /* loop through any values: */
    if ((my_values != null) && (my_values.length > 0)) {
      for (var i = 0; i < my_values.length; i++) {
        var my_value = my_values[i];
        /* if value is an integer ... : */
        if (Number.isInteger(my_value)) {
          /* if the value should be used: */
          if ((my_select['use_value'].indexOf(my_value) > -1) ||
              (my_select['use_value'].indexOf(true) > -1)) {
            /* store the value; */
            new_values.push(my_value);
          };
        };
      };
    };
  };

  /* store the updated values: */
  vci_conf['values'] = new_values;
};

/* section 01 checking function: */
function check_section_01() {
  /* vci value element: */
  var vci_value_el = vci_conf['vci_value_element'];
  /* hide the value element: */
  vci_value_el.style.display = 'none';
  /* calculate vci button: */
  var calculate_vci_button = vci_conf['calculate_vci_button'];
  /* display the button: */
  calculate_vci_button.style.display = 'inline';

  /* presume section 01 is not o.k.: */
  vci_conf['section_01_ok'] = false;
  /* get section 01 select elements: */
  var section_01_selects = vci_conf['section_01_selects'];
  /* loop through select elements: */
  for (const section_01_select in section_01_selects) {
    /* this selector: */
    var my_select = section_01_selects[section_01_select];
    /* html element: */
    var my_html_els = my_select['elements'];
    /* for each element: */
    for (var i = 0; i < my_html_els.length; i++) {
      var my_html_el = my_html_els[i];
      /* if not checked, move on: */
      if (my_html_el['checked'] != true) {
        continue;
      };
      /* get value(s): */
      var my_values = my_html_el.value.split(',');
      /* check values and store integers: */
      var my_new_values = [];
      for (var j = 0; j < my_values.length; j++) {
        var my_value = parseInt(my_values[j]);
        /* if value is an integer ... : */
        if (Number.isInteger(my_value)) {
          /* store the value: */
          my_new_values.push(my_value);
        };
      };
      /* store any integer values: */
      if (my_new_values.length > 0) {
        my_select['value'] = my_new_values;
      } else {
        my_select['value'] = null;
      };
    };

    /* update value label: */
    if (my_select['value'] != null) {
      /* if more than one value, display multiple labels: */
      if (my_select['value'].length > 1) {
        my_select['value_element_a'].innerHTML = my_select['value'][0];
        my_select['value_element_a'].style.color = vci_conf['vci_colors'][my_select['value'][0]];
        my_select['value_element_a'].style.backgroundColor = vci_conf['vci_bgcolors'][my_select['value'][0]];
        my_select['value_element_b'].innerHTML = '-';
        my_select['value_element_b'].style.color = '#000000';
        my_select['value_element_c'].innerHTML = my_select['value'].slice(-1);
        my_select['value_element_c'].style.color = vci_conf['vci_colors'][my_select['value'].slice(-1)];
        my_select['value_element_c'].style.backgroundColor = vci_conf['vci_bgcolors'][my_select['value'].slice(-1)];
      } else {
        my_select['value_element_a'].innerHTML = my_select['value'];
        my_select['value_element_a'].style.color = vci_conf['vci_colors'][my_select['value']];
        my_select['value_element_a'].style.backgroundColor = vci_conf['vci_bgcolors'][my_select['value']];
        my_select['value_element_b'].innerHTML = '&#8203;';
        my_select['value_element_b'].style.color = '#ffffff';
        my_select['value_element_c'].innerHTML = '&#8203;';
        my_select['value_element_c'].style.color = '#ffffff';
        my_select['value_element_c'].style.backgroundColor = '#ffffff';
      };
    } else {
      my_select['value_element_a'].innerHTML = '&#8203;';
      my_select['value_element_a'].style.color = '#ffffff';
      my_select['value_element_a'].style.backgroundColor = '#ffffff';
      my_select['value_element_b'].innerHTML = '&#8203;';
      my_select['value_element_b'].style.color = '#ffffff';
      my_select['value_element_b'].style.backgroundColor = '#ffffff';
      my_select['value_element_c'].innerHTML = '&#8203;';
      my_select['value_element_c'].style.color = '#ffffff';
      my_select['value_element_c'].style.backgroundColor = '#ffffff';
    };

  };
  /* update all values: */
  update_values();
  /* if there are any values stored, section 01 is o.k.: */
  if (vci_conf['values'].length > 0) {
    vci_conf['section_01_ok'] = true;
  };
  /* if section 01 is o.k. ... : */
  if (vci_conf['section_01_ok'] == true) {
    /* enable next button: */
    vci_conf['section_01_next'].disabled = false;
    /* enable vci button: */
    vci_conf['calculate_vci_button'].disabled = false;
  } else {
    /* disable next button: */
    vci_conf['section_01_next'].disabled = true;
    /* disable vci button: */
    vci_conf['calculate_vci_button'].disabled = true;
    /* display this next button: */
    vci_conf['section_01_next'].style.display = 'inline';
    /* hide section 02: */
    vci_conf['section_02_element'].style.display = 'none';
    /* hide vci value: */
    vci_conf['vci_value_element'].style.display = 'none';
  };
};

/* section 01 next button handler: */
function next_section_01() {
  /* check section 01 first: */
  check_section_01();
  /* if things are o.k. :*/
  if (vci_conf['section_01_ok'] == true) {
    /* hide this next button: */
    vci_conf['section_01_next'].style.display = 'none';
    /* enable section 02: */
    vci_conf['section_02_element'].style.display = 'inline';
    /* scroll down ... : */
    scrollBy(0, 430);
    /* set focus: */
    vci_conf['section_02_focus'].focus();
  } else {
    /* display this next button: */
    vci_conf['section_01_next'].style.display = 'inline';
    /* hide section 02: */
    vci_conf['section_02_element'].style.display = 'none';
  };
};

/* section 02 checking function: */
function check_section_02() {
  /* vci value element: */
  var vci_value_el = vci_conf['vci_value_element'];
  /* hide the value element: */
  vci_value_el.style.display = 'none';
  /* calculate vci button: */
  var calculate_vci_button = vci_conf['calculate_vci_button'];
  /* display the button: */
  calculate_vci_button.style.display = 'inline';

  /* get section 02 select elements: */
  var section_02_selects = vci_conf['section_02_selects'];
  /* loop through select elements: */
  for (const section_02_select in section_02_selects) {
    /* this selector: */
    var my_select = section_02_selects[section_02_select];
    /* html element: */
    var my_html_els = my_select['elements'];
    /* for each element: */
    for (var i = 0; i < my_html_els.length; i++) {
      var my_html_el = my_html_els[i];
      /* if not checked, move on: */
      if (my_html_el['checked'] != true) {
        continue;
      };
      /* get value(s): */
      var my_values = my_html_el.value.split(',');
      /* check values and store integers: */
      var my_new_values = [];
      for (var j = 0; j < my_values.length; j++) {
        var my_value = parseInt(my_values[j]);
        /* if value is an integer ... : */
        if (Number.isInteger(my_value)) {
          /* store the value: */
          my_new_values.push(my_value);
        };
      };
      /* store any integer values: */
      if (my_new_values.length > 0) {
        my_select['value'] = my_new_values;
      } else {
        my_select['value'] = null;
      };
    };

    /* update value label: */
    if (my_select['value'] != null) {
      my_select['value_element_txt'].style.display = 'block';
      /* if more than one value, display multiple labels: */
      if (my_select['value'].length > 1) {
        my_select['value_element_a'].innerHTML = my_select['value'][0];
        my_select['value_element_a'].style.color = vci_conf['vci_colors'][my_select['value'][0]];
        my_select['value_element_a'].style.backgroundColor = vci_conf['vci_bgcolors'][my_select['value'][0]];
        my_select['value_element_b'].innerHTML = '-';
        my_select['value_element_b'].style.color = '#000000';
        my_select['value_element_c'].innerHTML = my_select['value'].slice(-1);
        my_select['value_element_c'].style.color = vci_conf['vci_colors'][my_select['value'].slice(-1)];
        my_select['value_element_c'].style.backgroundColor = vci_conf['vci_bgcolors'][my_select['value'].slice(-1)];

        my_select['value_element_aa'].innerHTML = my_select['value'][0];
        my_select['value_element_aa'].style.color = vci_conf['vci_colors'][my_select['value'][0]];
        my_select['value_element_aa'].style.backgroundColor = vci_conf['vci_bgcolors'][my_select['value'][0]];
        my_select['value_element_bb'].innerHTML = '-';
        my_select['value_element_bb'].style.color = '#000000';
        my_select['value_element_cc'].innerHTML = my_select['value'].slice(-1);
        my_select['value_element_cc'].style.color = vci_conf['vci_colors'][my_select['value'].slice(-1)];
        my_select['value_element_cc'].style.backgroundColor = vci_conf['vci_bgcolors'][my_select['value'].slice(-1)];

      } else {
        my_select['value_element_a'].innerHTML = my_select['value'];
        my_select['value_element_a'].style.color = vci_conf['vci_colors'][my_select['value']];
        my_select['value_element_a'].style.backgroundColor = vci_conf['vci_bgcolors'][my_select['value']];
        my_select['value_element_b'].innerHTML = '&#8203;';
        my_select['value_element_b'].style.color = '#ffffff';
        my_select['value_element_c'].innerHTML = '&#8203;';
        my_select['value_element_c'].style.color = '#ffffff';
        my_select['value_element_c'].style.backgroundColor = '#ffffff';

        my_select['value_element_aa'].innerHTML = my_select['value'];
        my_select['value_element_aa'].style.color = vci_conf['vci_colors'][my_select['value']];
        my_select['value_element_aa'].style.backgroundColor = vci_conf['vci_bgcolors'][my_select['value']];
        my_select['value_element_bb'].innerHTML = '&#8203;';
        my_select['value_element_bb'].style.color = '#ffffff';
        my_select['value_element_cc'].innerHTML = '&#8203;';
        my_select['value_element_cc'].style.color = '#ffffff';
        my_select['value_element_cc'].style.backgroundColor = '#ffffff';
      };
    } else {
      my_select['value_element_txt'].style.display = 'none';

      my_select['value_element_a'].innerHTML = '&#8203;';
      my_select['value_element_a'].style.color = '#ffffff';
      my_select['value_element_a'].style.backgroundColor = '#ffffff';
      my_select['value_element_b'].innerHTML = '&#8203;';
      my_select['value_element_b'].style.color = '#ffffff';
      my_select['value_element_b'].style.backgroundColor = '#ffffff';
      my_select['value_element_c'].innerHTML = '&#8203;';
      my_select['value_element_c'].style.color = '#ffffff';
      my_select['value_element_c'].style.backgroundColor = '#ffffff';

      my_select['value_element_aa'].innerHTML = '&#8203;';
      my_select['value_element_aa'].style.color = '#ffffff';
      my_select['value_element_aa'].style.backgroundColor = '#ffffff';
      my_select['value_element_bb'].innerHTML = '&#8203;';
      my_select['value_element_bb'].style.color = '#ffffff';
      my_select['value_element_bb'].style.backgroundColor = '#ffffff';
      my_select['value_element_cc'].innerHTML = '&#8203;';
      my_select['value_element_cc'].style.color = '#ffffff';
      my_select['value_element_cc'].style.backgroundColor = '#ffffff';
    };

  };
  /* update all values: */
  update_values();
};

/* vci value calculating function: */
function calculate_vci() {
  /* check section 01 first: */
  check_section_01();
  /* also check section 02: */
  check_section_02();
  /* calculate vci button: */
  var calculate_vci_button = vci_conf['calculate_vci_button'];
  /* vci value element: */
  var vci_value_el = vci_conf['vci_value_element'];

  /* display all entered values: */
  var vci_values_el = document.getElementById('vci_values');
  vci_values_el.innerHTML = '<tt>all values: ' + vci_conf['values'] + '</tt><br>';

  /* get min, max, sum and mean values: */
  var vci_min = Math.min.apply(Math, vci_conf['values']);
  var vci_max = Math.max.apply(Math, vci_conf['values']);
  var vci_sum = 0;
  var vci_counts = {};
  for (var i = 0; i < vci_conf['values'].length; i++) {
    var my_val = vci_conf['values'][i];
    vci_sum += my_val;
    if (vci_counts[my_val] == undefined) {
      vci_counts[my_val] = 1;
    } else {
      vci_counts[my_val] += 1;
    }
  };
  var vci_mean = vci_sum / vci_conf['values'].length;
  var vci_max_count = 0;
  var vci_mode = null;
  for (const vci_count in vci_counts) {
    if (vci_counts[vci_count] > vci_max_count) {
      vci_mode = vci_count;
      vci_max_count = vci_counts[vci_count];
    } else if (vci_counts[vci_count] == vci_max_count) {
      if (vci_count > vci_mode) {
        vci_mode = vci_count;
      };
    };
  };
  /* add stats to html: */
  vci_values_el.innerHTML += '<tt>min: ' + vci_min + '<br>' +
     'max: ' + vci_max + '<br>' +
     'sum: ' + vci_sum + '<br>' +
     'mean: ' + vci_mean.toFixed(2) + '<br>' +
     'mode: ' + vci_mode + '</tt><br>';


  /* display score: */
  var vci_score_ela = document.getElementById('vci_value_value_a');
  var vci_score_elb = document.getElementById('vci_value_value_b');
  var vci_score_elc = document.getElementById('vci_value_value_c');

  vci_score_ela.innerHTML = vci_min;
  vci_score_ela.style.color = vci_conf['vci_colors'][vci_min];
  vci_score_ela.style.backgroundColor = vci_conf['vci_bgcolors'][vci_min];
  if (vci_min != vci_max) {
    vci_score_elb.innerHTML = '-';
    vci_score_elb.style.color = '#000000';
    vci_score_elc.innerHTML = vci_max;
    vci_score_elc.style.color = vci_conf['vci_colors'][vci_max];
    vci_score_elc.style.backgroundColor = vci_conf['vci_bgcolors'][vci_max];
  } else {
    vci_score_elb.innerHTML = '';
    vci_score_elb.style.color = '#fffff';
    vci_score_elc.innerHTML = '';
    vci_score_elc.style.color = '#ffffff';
    vci_score_elc.style.backgroundColor = '#ffffff';
  };

  /* hide the vci calculating button: */
  calculate_vci_button.style.display = 'none';
  /* display the element: */
  vci_value_el.style.display = 'inline';

  /* scroll down ... : */
  scrollBy(0, 430);
};

/* add listeners to listening elements: */
function add_listeners() {

  /* add section 01 listeners ... get select elements: */
  var section_01_selects = vci_conf['section_01_selects'];
  /* loop through select elements: */
  for (const section_01_select in section_01_selects) {
    /* this selector: */
    var my_select = section_01_selects[section_01_select];
    /* html elements: */
    var my_html_els = my_select['elements'];
    /* for each element: */
    for (var i = 0; i < my_html_els.length; i++) {
      var my_html_el = my_html_els[i];
      /* on change action: */
      var my_action = my_select['action'];
      /* add the listener, if not null: */
      if (my_action != null) {
        my_html_el.addEventListener('change', my_action);
      };
    };
  };

  /* add section 01 next button listener: */
  var section_01_next = vci_conf['section_01_next'];
  /* add the listener: */
  section_01_next.addEventListener('click', next_section_01);

  /* add section 02 listeners ... get select elements: */
  var section_02_selects = vci_conf['section_02_selects'];
  /* loop through select elements: */
  for (const section_02_select in section_02_selects) {
    /* this selector: */
    var my_select = section_02_selects[section_02_select];
    /* html elements: */
    var my_html_els = my_select['elements'];
    /* for each element: */
    for (var i = 0; i < my_html_els.length; i++) {
      var my_html_el = my_html_els[i];
      /* on change action: */
      var my_action = my_select['action'];
      /* add the listener, if not null: */
      if (my_action != null) {
        my_html_el.addEventListener('change', my_action);
      };
    };
  };

  /* add vci calculating button listener: */
  var calculate_vci_button = vci_conf['calculate_vci_button'];
  /* add the listener: */
  calculate_vci_button.addEventListener('click', calculate_vci);

};

/* page init function: */
function page_init() {

  /* add element listeners: */
  add_listeners();
  /* set focus to initial element: */
  vci_conf['section_01_focus'].focus();

};

/* on page load, init the page: */
window.addEventListener('load', page_init);

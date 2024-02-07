Group Work: Reading from CSV Files
----------------------------------------

It is best to use a POGIL approach with the following. In POGIL students work
in groups on activities and each member has an assigned role.  For more information see `https://cspogil.org/Home <https://cspogil.org/Home>`_.

.. note::

   If you work in a group, have only one member of the group fill in the answers on this page.  You will be able to share your answers with the group at the bottom of the page.

**Learning Objectives**

Students will know and be able to do the following.

*Content Objectives:*

* Process data in csv files using rstrip, strip, and split.
* Read csv data into a nested dictionary.  A nested dictionary has a dictionary inside of another dictionary.  
* Total data using a dictionary
* Sort data from a dictionary

*Process Objectives:*

* Modify code that reads from csv files
* Fix code that reads from a csv file

Comma-Separated Values (CSV) Files
====================================

One way that we exchange data is by storing it in comma-separated value (CSV) files.  These files have values separated by a symbol, which is often a comma. Each row in the file contains the same type of data.

Look at the data in the file below by clicking on the "Show" button.  It has a date in day-month-year followed by the opening value, high, low, and closing value. The first 
line is 3-Dec-01,9848.93,10220.78,9651.87,10021.57.


.. reveal:: stocks.txt
   :showtitle: Show
   :hidetitle: Hide

   .. code-block::

      3-Dec-01,9848.93,10220.78,9651.87,10021.57
      1-Nov-01,9087.45,10054.58,8987.61,9851.56
      1-Oct-01,8845.97,9626.54,8659.9,9075.14
      4-Sep-01,9946.98,10238.5,7926.93,8847.56
      1-Aug-01,10527.38,10663.07,9829.35,9949.75
      2-Jul-01,10504.95,10758.14,10049.38,10522.81
      1-Jun-01,10913.57,11236.68,10313.4,10502.4
      1-May-01,10734.05,11436.42,10638.48,10911.94
      2-Apr-01,9877.16,10973.15,9303.48,10734.97
      1-Mar-01,10493.25,10940.45,9047.56,9878.78
      1-Feb-01,10884.82,11140.09,10225.14,10495.28
      2-Jan-01,10790.92,11224.41,10325.71,10887.36
      1-Dec-00,10416.76,11044.7,10158.16,10787.99
      1-Nov-00,10966.21,11152.02,10204.8,10414.49
      2-Oct-00,10659.06,11108.79,9571.4,10971.14
      1-Sep-00,11219.54,11518.83,10439.31,10650.92
      1-Aug-00,10523.81,11415.99,10428.58,11215.1
      3-Jul-00,10450.36,10980.34,10303.28,10521.98
      1-Jun-00,10532.27,11013.05,10161.51,10447.89
      1-May-00,10749.42,11086.72,10163.2,10522.33
      3-Apr-00,10863.28,11600.43,10128.62,10733.91
      1-Mar-00,10128.11,11311.28,9611.75,10921.92
      1-Feb-00,10937.74,11228.44,9760.36,10128.31
      3-Jan-00,11501.85,11908.5,10610.43,10940.53
      1-Dec-99,10876.47,11658.68,10798.07,11497.12
      1-Nov-99,10730.78,11195.34,10449.42,10877.81
      1-Oct-99,10335.69,10883.1,9884.2,10729.86
      1-Sep-99,10828.44,11218.39,10055.17,10336.95
      2-Aug-99,10654.83,11428.94,10487.34,10829.28
      1-Jul-99,10972.39,11321.61,10594.99,10655.15
      1-Jun-99,10549.08,11120.24,10334.42,10970.8
      3-May-99,10788.75,11244.36,10372.96,10559.74
      1-Apr-99,9825.29,11072.25,9707.91,10789.04
      1-Mar-99,9315.27,10158.57,9163.41,9786.16
      1-Feb-99,9405.43,9662.77,9025.41,9306.58
      4-Jan-99,9212.84,9759.44,8994.26,9358.83
      1-Dec-98,9039.57,9390.75,8610.63,9181.43
      2-Nov-98,8645.65,9457.95,8573.56,9116.55
      1-Oct-98,7749.42,8718.25,7399.78,8592.1
      1-Sep-98,7583.09,8253.79,7379.7,7842.62
      3-Aug-98,8868.1,8948.17,7517.7,7539.07
      1-Jul-98,9011.56,9412.64,8786.48,8883.29
      1-Jun-98,8907.93,9155.04,8524.55,8952.02
      1-May-98,9106.47,9311.98,8760.95,8899.95
      1-Apr-98,8818.5,9287.32,8715.61,9063.37
      2-Mar-98,8528.78,8997.11,8377.32,8799.81
      2-Feb-98,7987.46,8616.72,7987.46,8545.72
      2-Jan-98,7908.25,8072.91,7391.59,7906.5
      1-Dec-97,7823.62,8209.56,7563.23,7908.25
      3-Nov-97,7443.07,7934.53,7334.77,7823.13
      1-Oct-97,7945.26,8218.34,6936.45,7442.08
      2-Sep-97,7650.99,8078.36,7556.23,7945.26
      1-Aug-97,8222.61,8340.14,7580.85,7622.42
      1-Jul-97,7672.79,8328.99,7613.53,8222.61
      2-Jun-97,7331.04,7868.44,7214.29,7672.79
      1-May-97,7008.99,7430.2,6891.39,7331.04
      1-Apr-97,6583.48,7081.23,6315.84,7008.99
      3-Mar-97,6877.74,7158.28,6532.49,6583.48
      3-Feb-97,6813.09,7112.87,6683.4,6877.74
      2-Jan-97,6448.27,6953.55,6318.96,6813.09
      2-Dec-96,6521.7,6623.96,6206.83,6448.27
      1-Nov-96,6029.38,6606.3,5975.34,6521.7
      1-Oct-96,5882.17,6162.8,5833.72,6029.38
      3-Sep-96,5616.21,5952.08,5550.37,5882.17
      1-Aug-96,5528.91,5761.95,5507.83,5616.21
      1-Jul-96,5654.63,5769.88,5170.11,5528.91
      3-Jun-96,5643.18,5770.61,5559.69,5654.63
      1-May-96,5569.08,5833.04,5327.74,5643.18
      1-Apr-96,5587.14,5737.07,5382.66,5569.08
      1-Mar-96,5485.62,5755.86,5395.3,5587.14
      1-Feb-96,5395.3,5693.36,5319.43,5485.62
      2-Jan-96,5117.12,5433.24,5000.07,5395.3
      1-Dec-95,5074.49,5266.69,5016.68,5117.12
      1-Nov-95,4755.48,5143.13,4719.72,5074.49
      2-Oct-95,4789.08,4845.08,4638.43,4755.48
      1-Sep-95,4610.56,4839.48,4594.71,4789.08
      1-Aug-95,4708.47,4772.56,4552.8,4610.56
      3-Jul-95,4556.1,4767.99,4530.26,4708.47
      1-Jun-95,4465.14,4614.2,4394.59,4556.1
      1-May-95,4321.27,4480.7,4278.73,4465.14
      3-Apr-95,4157.69,4348.94,4129.68,4321.27
      1-Mar-95,4011.05,4213.71,3935.31,4157.69
      1-Feb-95,3843.86,4034.62,3809.21,4011.05
      3-Jan-95,3834.44,3955.56,3794.4,3843.86
      1-Dec-94,3739.23,3882.21,3638.97,3834.44
      1-Nov-94,3908.12,3919.9,3612.05,3739.23
      3-Oct-94,3843.19,3958.25,3736.2,3908.12
      1-Sep-94,3913.42,3972.72,3804.5,3843.19
      1-Aug-94,3764.5,3954.54,3722.41,3913.42
      1-Jul-94,3624.96,3782.63,3611.04,3764.5
      1-Jun-94,3758.37,3839.88,3603.92,3624.96
      2-May-94,3681.69,3788.76,3609.71,3758.37
      4-Apr-94,3633.08,3733.15,3520.8,3681.69
      1-Mar-94,3832.02,3911.78,3544.12,3635.96
      1-Feb-94,3978.36,3998.06,3811.76,3832.02
      3-Jan-94,3754.09,4002.84,3715.24,3978.36
      1-Dec-93,3683.95,3818.92,3673.33,3754.09
      1-Nov-93,3680.59,3749.9,3585.86,3683.95
      1-Oct-93,3555.12,3713.57,3541.71,3680.59
      1-Sep-93,3651.25,3665.5,3501.47,3555.12
      2-Aug-93,3539.47,3681.71,3523.54,3651.25
      1-Jul-93,3516.08,3604.86,3443.28,3539.47
      1-Jun-93,3527.43,3577.25,3445.77,3516.08
      3-May-93,3427.55,3582.23,3402.42,3527.43
      1-Apr-93,3435.11,3499.41,3338.39,3427.55
      1-Mar-93,3370.81,3497.25,3334.07,3435.11
      1-Feb-93,3310.03,3472.94,3262.48,3370.81
      4-Jan-93,3301.11,3338.12,3219.25,3310.03
      1-Dec-92,3305.16,3364.87,3229.79,3301.11
      2-Nov-92,3226.28,3326.51,3176.84,3305.16
      1-Oct-92,3271.66,3291.39,3087.41,3226.28
      1-Sep-92,3257.35,3391.35,3226.55,3271.66
      3-Aug-92,3393.78,3413.23,3200.86,3257.35
      1-Jul-92,3318.52,3414.85,3255.43,3393.78
      1-Jun-92,3396.88,3435.27,3242.32,3318.52
      1-May-92,3359.12,3433.98,3316.64,3396.88
      1-Apr-92,3235.47,3387.97,3141.77,3359.12
      2-Mar-92,3267.67,3318.42,3176.21,3235.47
      3-Feb-92,3223.39,3307.47,3193.42,3267.67
      2-Jan-92,3168.83,3313.51,3119.86,3223.39
      2-Dec-91,2894.68,3204.61,2832.29,3168.83
      1-Nov-91,3069.1,3091.91,2861.14,2894.68
      1-Oct-91,3016.77,3091.01,2925.54,3069.1
      3-Sep-91,3043.6,3066.64,2963.1,3016.77
      1-Aug-91,3024.82,3068.65,2836.31,3043.6
      1-Jul-91,2911.67,3039.58,2897.36,3024.82
      3-Jun-91,3027.5,3057.47,2879.25,2906.75
      1-May-91,2887.87,3044.5,2834.53,3027.5
      1-Apr-91,2913.86,3030.45,2848.51,2887.87
      1-Mar-91,2882.18,3017.82,2829.21,2913.86
      1-Feb-91,2736.39,2955.2,2694.31,2882.18
      2-Jan-91,2633.66,2747.28,2447.03,2736.39
      3-Dec-90,2559.65,2662.62,2534.65,2633.66
      1-Nov-90,2442.33,2581.19,2415.59,2559.65
      1-Oct-90,2452.48,2565.35,2344.31,2442.33
      4-Sep-90,2614.36,2665.35,2367.82,2452.48
      1-Aug-90,2905.2,2931.19,2459.41,2614.36
      2-Jul-90,2880.69,3024.26,2833.17,2905.2
      1-Jun-90,2876.66,2956.93,2821.53,2880.69
      1-May-90,2656.76,2908.21,2651.35,2876.66
      2-Apr-90,2707.21,2793.47,2627.7,2656.76
      1-Mar-90,2627.25,2775,2607.88,2707.21
      1-Feb-90,2590.54,2674.32,2540.99,2627.25
      2-Jan-90,2753.2,2834.04,2513.06,2590.54
      1-Dec-89,2706.27,2784.77,2658.7,2753.2
      1-Nov-89,2645.08,2718.22,2563.11,2706.27
      2-Oct-89,2692.82,2809.08,2496.93,2645.08
      1-Sep-89,2737.27,2768.24,2636.78,2692.82
      1-Aug-89,2660.66,2758.73,2619.71,2737.27
      3-Jul-89,2440.06,2668.25,2431.53,2660.66
      1-Jun-89,2480.15,2544.95,2412.94,2440.06
      1-May-89,2418.8,2521.63,2356.3,2480.15
      3-Apr-89,2293.62,2433.1,2282.07,2418.8
      1-Mar-89,2258.39,2351.07,2234.46,2293.62
      1-Feb-89,2342.32,2369.29,2232.14,2258.39
      3-Jan-89,2168.39,2350.18,2127.14,2342.32

.. fillintheblank:: csv_file_stocks_max_close_fitb

    What is the highest closing value in the file above?  The closing value is the last value on each line. For example for 3-Dec-01 it was 10021.57.

    - :11497.12: This is the highest value at the close.
      :.*: Look at the last value on each line and find the highest value.

We can write Python code to read the data and find the date with the highest value at the close.

.. activecode:: csv_file_stocks_find_date_with_highest_close_ac
    :datafile: stocks.txt

    Run the code below to find the date with the highest value at the close.
    ~~~~
    # get the lines from the file
    with open("stocks.txt") as inFile:
        lines = inFile.readlines()

    # init max_close and max_date
    max_close = 0
    max_date = ""

    # for each line in the file
    for line in lines:

        # remove the new line and split at commas
        values = line.rstrip().split(',')

        # get the values
        date = values[0]
        close = float(values[4])

        # if the current close is greater then save it and the date
        if close > max_close:
            max_close = close
            max_date = date

    print(f"Max close {max_close} on {max_date}")


.. note ::

   Remember to remove the end of line character and convert the string values to integers or floating point numbers before comparing them or using them in calculations.

What if you want to find several things from the data? You wouldn't want to read the data from the file in every function.  
You could read all the data into a nested dictionary (a dictionary that contains another dictionary inside of it) and then pass the outer dictionary to every function. 
In this case we can use the date as a key for the outer dictionary and use "open", "high", "low" and "close"
as the keys for each inner dictionary: {'3-Dec-01': {'open': 9848.93, 'high': 10220.78, 'low': 9651.870000000001, 'close': 10021.57}, ...

.. fillintheblank:: csv_file_stocks_min_close_fitb

    What is the lowest closing value in the stocks.txt file above?

    - :2258.39: This is the lowest value at the close.
      :.*: Look at the last value on each line and find the lowest value.

.. activecode:: csv_file_stocks_read_into_dictionary_ac
    :datafile: stocks.txt

    Run the code below to find the date with the highest value at the close and the date with the lowest value at the close.
    ~~~~
    def get_dict(file):
        """ return a nested dictionary from the file """

        # get the lines from the file
        with open("stocks.txt") as inFile:
            lines = inFile.readlines()

        # initialize the date dictionary
        date_d = {}

        # for each line in the file
        for line in lines:

            # remove the new line and split at commas
            values = line.rstrip().split(',')

            # get all the values from the line and create the inner dictionary
            values_d = {}
            date = values[0]
            op = float(values[1])
            values_d["open"] = op
            high = float(values[2])
            values_d["high"] = high
            low = float(values[3])
            values_d["low"] = low
            close = float(values[4])
            values_d["close"] = close

            # set the value in the outer dictionary for this date to the inner dictionary
            date_d[date] = values_d

        return date_d

    def get_date_min_close(date_d):
        """return the lowest close and the date of that lowest close from the nested dictionary"""
        min_date = ""
        min_close = 100000 #should be larger than any expected value

        # loop through the dates
        for date, values_d in date_d.items():
            close = values_d["close"]
            if close < min_close:
                min_close = close
                min_date = date
        return (min_close, min_date)

    def get_date_max_close(date_d):
        """ return the highest close and the date of the highest close from the nested dictionary """
        max_date = ""
        max_close = 0

        # loop through the dates
        for date, values_d in date_d.items():
            close = values_d["close"]
            if close > max_close:
                max_close = close
                max_date = date
        return (max_close, max_date)

    def get_max_close_for_year(date_d, year):
        max_date = ""
        max_close = 0
        for date, values_d in date_d.items():
            values = date.split("-")
            curr_year = int(values[2])
            curr_close = values_d["close"]
            if curr_year == year and curr_close > max_close:
                max_close = curr_close
                max_date = date
        return (max_close, max_date)


    date_d = get_dict("stocks.txt")
    max_close, max_date = get_date_max_close(date_d)
    print(f"Max close {max_close} on {max_date}")
    min_close, min_date = get_date_min_close(date_d)
    print(f"Min close {min_close} on {min_date}")

.. dragndrop:: csv_file_dnd_string_and_conversion_functions_dnd
    :feedback: What do each of these do?
    :match_1: str.rstrip()|||Returns a new string without trailing white space (including new lines).
    :match_2: float(value)|||Returns a floating point value from a string.
    :match_3: str.split(",")|||Returns a list of items created by splitting the string at commas.
    :match_4: str.strip()|||Returns a new string without leading or trailing white space.
    :match_5: int(value)|||Returns an integer value from a string.

    Drag each function to the correct description.

.. mchoice:: csv_file_strip_with_params_mcq
    :practice: T
    :answer_a: 1958
    :answer_b:  "1958
    :answer_c: 1958"
    :answer_d: "1958"
    :correct: b
    :feedback_a: This would be correct if it was strip('" ') since this would remove all spaces and double quotes.
    :feedback_b: Correct!  Since the string starts with a space and you didn't remove the space too using strip('" ') it won't remove the " before the string.
    :feedback_c: This would be true if the string was '"1958" ' (space at the end) rather than ' "1958"' (space at the beginning).
    :feedback_d: This would be true if it was strip() (removes leading and trailing spaces).

    What is output from the following code?

    ::

        print(' "1958"'.strip('"'))


Nested dictionaries
=====================

A dictionary can contain or more more dictioaries inside of it.  We call this a nested 
dictionary.  For example, {'3-Dec-01': {'open': 9848.93, 'high': 10220.78, 'low': 9651.870000000001, 'close': 10021.57}} 
is a nested dictionary.  It has a date as a string as the key for the outer dictionary
and the inner dictionary has keys of 'high', 'low', and 'close' and a floating point value for each inner key.

.. parsonsprob:: csv_file_stocks_max_close_for_year_pp
    :numbered: left
    :adaptive:
    :practice: T
    :order: 9, 6, 2, 1, 10, 0, 4, 5, 8, 7, 3

    Create a function, ``get_max_close(date_d, year)``, that takes a nested dictionary ``d`` with the stock data and a two digit ``year`` and returns a tuple with the max close value and date of that max value for the given year.
    -----
    def get_max_close(d, year):
    =====
        max_date = ""
        max = 0
    =====
        max_date = ""
        max = 100000 #paired
    =====
        for date, v_d in d.items():
    =====
            values = date.split("-")
    =====
            values = date.split(",") #paired
    =====
            y = int(values[2])
            c = v_d["close"]
    =====
            if y == year and c > max:
    =====
            if y == year or c > max: #paired
    =====
                max = c
                max_date = date
    =====
        return (max, max_date)



Comma-Separated Values (CSV) Files with a Header Row
=======================================================

Click on the "Show" button to see another sample example CSV file.  It contains the number of passengers (in thousands) for transatlantic air travel for each month for the years 1958 to 1960.  The first row is a header that explains the data: "Month", "1958", "1959", "1960".
The second row starts with a three letter abbreation for the month followed by the number
of passengers (in thousands) for 1958, then 1959, and then 1960 such as:  "JAN",  340,  360,  417.
The data is from https://people.sc.fsu.edu/~jburkardt/data/csv/csv.html.

.. reveal:: airtravel.csv
   :showtitle: Show
   :hidetitle: Hide

   .. code-block::

      "Month", "1958", "1959", "1960"
      "JAN",  340,  360,  417
      "FEB",  318,  342,  391
      "MAR",  362,  406,  419
      "APR",  348,  396,  461
      "MAY",  363,  420,  472
      "JUN",  435,  472,  535
      "JUL",  491,  548,  622
      "AUG",  505,  559,  606
      "SEP",  404,  463,  508
      "OCT",  359,  407,  461
      "NOV",  310,  362,  390
      "DEC",  337,  405,  432


We can read the data from the file and store it in a nested dictionary. In this case the outer dictionary will use the month as the key and the inner dictionary will use the years as the keys.  It will use the data from the header row for the year keys.
The nested dictionary will look like: {'JAN': {'1958': 340, '1959': 360, '1960': 417}, 'FEB': {'1958': 318, '1959': 342, '1960': 391} ....

.. activecode:: csv_file_airtravel_get_toal_for_year_ac
    :datafile: airtravel.csv

    Run the code below.  It is supposed to print the nested dictionary and then the total number of passengers (in thousands) for 1958, but there are errors.  Fix the errors so that all tests pass.
    ~~~~
    def get_dict(file):

        d = {}

        # get the file handler
        inFile = open(file)

        # read the header row
        header = inFile.readline()
        header_values = header.split(",")
        header_1 = header_values[1]
        header_2 = header_values[2]
        header_3 = header_values[3]

        # read the rest of the lines from the file handler
        for line in inFile:
            #print(line)
            values = line.split(",")
            if len(values) == 4:
                month = values[0]
                data_1 = values[1]
                data_2 = values[2]
                data_3 = values[3]

                year_d = {}
                year_d[header_1] = data_1
                year_d[header_2] = data_2
                year_d[header_3] = data_3
                d[month] = year_d

        inFile.close()
        return d

    def get_total_for_year(travel_d, year):
        total = 0
        for key in travel_d:
            data_d = travel_d[key]
            total += data_d[year]
        return total

    travel_d = get_dict("airtravel.csv")
    print(travel_d)
    total = get_total_for_year(travel_d, "1958")
    print(total)

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

       def testOne(self):
          travel_d = get_dict("airtravel.csv")
          self.assertEqual(get_total_for_year(travel_d, "1958"), 4572, 'get_total_for_year(travel_d, "1958")')
          self.assertEqual(get_total_for_year(travel_d, "1959"), 5140, 'get_total_for_year(travel_d, "1959")')
          self.assertEqual(get_total_for_year(travel_d, "1960"), 5714, 'get_total_for_year(travel_d, "1960")')

    myTests().main()


.. fillintheblank:: csv_file_air_travel_most_month_1958_fitb

    Which month had the most passengers travelling by air in 1958?  Enter the three letter code from the file for the month.

    - :AUG: August 1958 had the highest number of passengers.
      :.*: Look at the values for 1958 in the file.  What is the highest number?

.. activecode:: csv_file_airtravel_get_max_month_ac
    :datafile: airtravel.csv

    Fix the code below to work correctly.  It should print the month with the highest number of passengers in 1958.
    ~~~~
    def get_dict(file):

        d = {}

        # get the file handler
        inFile = open(file)

        # skip the header
        header = inFile.readline()
        #print(header)
        header_values = header.split(",")
        header_1 = header_values[1]
        header_2 = header_values[2]
        header_3 = header_values[3]

        # read the rest of the lines from the file handler
        for line in inFile:
            values = line.rstrip().split(",")
            if len(values) == 4:
                month = values[0]
                data_1 = int(values[1])
                data_2 = int(values[2])
                data_3 = int(values[3])

                year_d = {}
                year_d[header_1] = data_1
                year_d[header_2] = data_2
                year_d[header_3] = data_3
                d[month] = year_d

        inFile.close()
        return d

    def get_max_month(travel_d, year):
        d = {}
        for month in travel_d:
            month_d = travel_d[month]
            d[month] = month_d[year]
        tup_list = sorted(d.items(), key = lambda t: t[1], reverse = True)
        return tup_list[0]

    travel_d = get_dict("airtravel.csv")
    print(travel_d)
    month, amount = get_max_month(travel_d, "1958")
    print(month, amount)

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

       def testOne(self):
          travel_d = get_dict("airtravel.csv")
          self.assertEqual(get_max_month(travel_d, "1958")[0], "AUG", 'get_max_month(travel_d, "1958")[0]')
          self.assertEqual(get_max_month(travel_d, "1959")[0], "AUG", 'get_max_month(travel_d, "1959")[0]')
          self.assertEqual(get_max_month(travel_d, "1960")[0], "JUL", 'get_max_month(travel_d, "1960")[0]')

    myTests().main()

Click on the "Show" button to see another CSV file.  It contains the Oscar winners for Best Actress from 1928 to 2016.  
It has a header row to explain the data in each column: "Index", "Year", "Age", "Name", "Movie".
The first row of data is: 1, 1928, 22, "Janet Gaynor", "Seventh Heaven, Street Angel and Sunrise: A Song of Two Humans".

.. reveal:: oscar_age_actress.csv
   :showtitle: Show
   :hidetitle: Hide

   .. code-block::

      "Index", "Year", "Age", "Name", "Movie"
       1, 1928, 22, "Janet Gaynor", "Seventh Heaven, Street Angel and Sunrise: A Song of Two Humans"
       2, 1929, 37, "Mary Pickford", "Coquette"
       3, 1930, 28, "Norma Shearer", "The Divorcee"
       4, 1931, 63, "Marie Dressler", "Min and Bill"
       5, 1932, 32, "Helen Hayes", "The Sin of Madelon Claudet"
       6, 1933, 26, "Katharine Hepburn", "Morning Glory"
       7, 1934, 31, "Claudette Colbert", "It Happened One Night"
       8, 1935, 27, "Bette Davis", "Dangerous"
       9, 1936, 27, "Luise Rainer", "The Great Ziegfeld"
      10, 1937, 28, "Luise Rainer", "The Good Earth"
      11, 1938, 30, "Bette Davis", "Jezebel"
      12, 1939, 26, "Vivien Leigh", "Gone with the Wind"
      13, 1940, 29, "Ginger Rogers", "Kitty Foyle"
      14, 1941, 24, "Joan Fontaine", "Suspicion"
      15, 1942, 38, "Greer Garson", "Mrs. Miniver"
      16, 1943, 25, "Jennifer Jones", "The Song of Bernadette"
      17, 1944, 29, "Ingrid Bergman", "Gaslight"
      18, 1945, 40, "Joan Crawford", "Mildred Pierce"
      19, 1946, 30, "Olivia de Havilland", "To Each His Own"
      20, 1947, 35, "Loretta Young", "The Farmer's Daughter"
      21, 1948, 32, "Jane Wyman", "Johnny Belinda"
      22, 1949, 33, "Olivia de Havilland", "The Heiress"
      23, 1950, 29, "Judy Holliday", "Born Yesterday"
      24, 1951, 38, "Vivien Leigh", "A Streetcar Named Desire"
      25, 1952, 54, "Shirley Booth", "Come Back, Little Sheba"
      26, 1953, 24, "Audrey Hepburn", "Roman Holiday"
      27, 1954, 25, "Grace Kelly", "The Country Girl"
      28, 1955, 48, "Anna Magnani", "The Rose Tattoo"
      29, 1956, 41, "Ingrid Bergman", "Anastasia"
      30, 1957, 28, "Joanne Woodward", "The Three Faces of Eve"
      31, 1958, 41, "Susan Hayward", "I Want to Live!"
      32, 1959, 39, "Simone Signoret", "Room at the Top"
      33, 1960, 29, "Elizabeth Taylor", "BUtterfield 8"
      34, 1961, 27, "Sophia Loren", "Two Women"
      35, 1962, 31, "Anne Bancroft", "The Miracle Worker"
      36, 1963, 31, "Patricia Neal", "Hud"
      37, 1964, 29, "Julie Andrews", "Mary Poppins"
      38, 1965, 25, "Julie Christie", "Darling"
      39, 1966, 35, "Elizabeth Taylor", "Who's Afraid of Virginia Woolf?"
      40, 1967, 60, "Katharine Hepburn", "Guess Who's Coming to Dinner"
      41, 1968, 61, "Katharine Hepburn", "The Lion in Winter"
      42, 1969, 26, "Barbra Streisand", "Funny Girl"
      43, 1970, 35, "Maggie Smith", "The Prime of Miss Jean Brodie"
      44, 1971, 34, "Glenda Jackson", "Women in Love"
      45, 1972, 34, "Jane Fonda", "Klute"
      46, 1973, 27, "Liza Minnelli", "Cabaret"
      47, 1974, 37, "Glenda Jackson", "A Touch of Class"
      48, 1975, 42, "Ellen Burstyn", "Alice Doesn't Live Here Anymore"
      49, 1976, 41, "Louise Fletcher", "One Flew Over the Cuckoo's Nest"
      50, 1977, 36, "Faye Dunaway", "Network"
      51, 1978, 32, "Diane Keaton", "Annie Hall"
      52, 1979, 41, "Jane Fonda", "Coming Home"
      53, 1980, 33, "Sally Field", "Norma Rae"
      54, 1981, 31, "Sissy Spacek", "Coal Miner's Daughter"
      55, 1982, 74, "Katharine Hepburn", "On Golden Pond"
      56, 1983, 33, "Meryl Streep", "Sophie's Choice"
      57, 1984, 49, "Shirley MacLaine", "Terms of Endearment"
      58, 1985, 38, "Sally Field", "Places in the Heart"
      59, 1986, 61, "Geraldine Page", "The Trip to Bountiful"
      60, 1987, 21, "Marlee Matlin", "Children of a Lesser God"
      61, 1988, 41, "Cher", "Moonstruck"
      62, 1989, 26, "Jodie Foster", "The Accused"
      63, 1990, 80, "Jessica Tandy", "Driving Miss Daisy"
      64, 1991, 42, "Kathy Bates", "Misery"
      65, 1992, 29, "Jodie Foster", "The Silence of the Lambs"
      66, 1993, 33, "Emma Thompson", "Howards End"
      67, 1994, 36, "Holly Hunter", "The Piano"
      68, 1995, 45, "Jessica Lange", "Blue Sky"
      69, 1996, 49, "Susan Sarandon", "Dead Man Walking"
      70, 1997, 39, "Frances McDormand", "Fargo"
      71, 1998, 34, "Helen Hunt", "As Good as It Gets"
      72, 1999, 26, "Gwyneth Paltrow", "Shakespeare in Love"
      73, 2000, 25, "Hilary Swank", "Boys Don't Cry"
      74, 2001, 33, "Julia Roberts", "Erin Brockovich"
      75, 2002, 35, "Halle Berry", "Monster's Ball"
      76, 2003, 35, "Nicole Kidman", "The Hours"
      77, 2004, 28, "Charlize Theron", "Monster"
      78, 2005, 30, "Hilary Swank", "Million Dollar Baby"
      79, 2006, 29, "Reese Witherspoon", "Walk the Line"
      80, 2007, 61, "Helen Mirren", "The Queen"
      81, 2008, 32, "Marion Cotillard", "La Vie en rose"
      82, 2009, 33, "Kate Winslet", "The Reader"
      83, 2010, 45, "Sandra Bullock", "The Blind Side"
      84, 2011, 29, "Natalie Portman", "Black Swan"
      85, 2012, 62, "Meryl Streep", "The Iron Lady"
      86, 2013, 22, "Jennifer Lawrence", "Silver Linings Playbook"
      87, 2014, 44, "Cate Blanchett", "Blue Jasmine"
      88, 2015, 54, "Julianne Moore", "Still Alice"
      89, 2016, 26, "Brie Larson", "Room"


We can read the data from the file and store it in a list of dictionaires where the keys in the dictionary are 'year', 'age', 'name', and 'movie'.
The first dictionary should be: {'year': '1928', 'age': '22', 'name': 'Janet Gaynor', 'movie': 'Seventh Heaven Street Angel and Sunrise: A Song of Two Humans'}.

.. activecode:: csv_file_oscar_actress_age_dictionary
    :datafile: oscar_age_actress.csv

    Run the code below.  It should read all the data into a list of dictionaries.  Then it should create a new dictionary where the key is the age and the value is the number of actresses who won at that age. It should sort the items in the dictionary by the number of winners descending and return the top five tuples. However, some of the movie titles have commas in them.  Fix the code to handle this problem and pass the unit tests.
    ~~~~
    def get_list(file):

        l = []

        # get the file handler
        inFile = open(file)

        # read the header row and discard
        header = inFile.readline()

        # read the rest of the lines from the file handler
        for line in inFile:
            values = line.rstrip().split(",")
            d = {}
            if len(values) > 5:
                 print("line has extra commas")
                 print(line)
                 exit()
            elif len(values) == 5:
                year = values[1].strip()
                d["year"] = year
                age = values[2].strip()
                d["age"] = age
                name = values[3]
                d["name"] = name.strip('" ')
                movie = values[4]
                d["movie"] = movie.strip('" ')
                l.append(d)

        inFile.close()
        return l

    def get_top_five_by_age(l):
        age_d = {}
        for d in l:
            age = d["age"]
            age_d[age] = age_d.get(age,0) + 1
        out = sorted(age_d.items(), key = lambda t: t[1], reverse = True)
        return out[0:5]

    dict_list = get_list('oscar_age_actress.csv')
    print(dict_list[0])
    age_d = get_top_five_by_age(dict_list)
    print(age_d)

    =====

    from unittest.gui import TestCaseGui

    class myTests(TestCaseGui):

       def testOne(self):
          l = get_list('oscar_age_actress.csv')
          self.assertEqual(get_top_five_by_age(l)[0][0], '29', 'get_top_five_by_age(l)[0][0]')
          self.assertEqual(get_top_five_by_age(l)[0][1], 8, 'get_top_five_by_age(l)[0][1]')
          self.assertEqual(get_top_five_by_age(l)[1][0], '26', 'get_top_five_by_age(l)[1][0]')
          self.assertEqual(get_top_five_by_age(l)[1][1], 6, 'get_top_five_by_age(l)[1][1]')
          self.assertEqual(get_top_five_by_age(l)[2][0], '33', 'get_top_five_by_age(l)[2][0]')
          self.assertEqual(get_top_five_by_age(l)[2][1], 6, 'get_top_five_by_age(l)[2][1]')
          self.assertEqual(get_top_five_by_age(l)[3][0], '35', 'get_top_five_by_age(l)[3][0]')
          self.assertEqual(get_top_five_by_age(l)[3][1], 5, 'get_top_five_by_age(l)[3][1]')
          self.assertEqual(get_top_five_by_age(l)[4][0], '41', 'get_top_five_by_age(l)[4][0]')
          self.assertEqual(get_top_five_by_age(l)[4][1], 5, 'get_top_five_by_age(l)[4][1]')


    myTests().main()

Change the code above to read from the file for the best actor.  This file has a header: "Index", "Year", "Age", "Name", "Movie".
The first row of data is: 1, 1928, 44, "Emil Jannings", "The Last Command, The Way of All Flesh".  
Are the results different?


.. reveal:: oscar_age_actor.csv
   :showtitle: Show
   :hidetitle: Hide

   .. code-block::

      "Index", "Year", "Age", "Name", "Movie"
       1, 1928, 44, "Emil Jannings", "The Last Command, The Way of All Flesh"
       2, 1929, 41, "Warner Baxter", "In Old Arizona"
       3, 1930, 62, "George Arliss", "Disraeli"
       4, 1931, 53, "Lionel Barrymore", "A Free Soul"
       5, 1932, 47, "Wallace Beery", "The Champ"
       6, 1933, 35, "Fredric March", "Dr. Jekyll and Mr. Hyde"
       7, 1934, 34, "Charles Laughton", "The Private Life of Henry VIII"
       8, 1935, 34, "Clark Gable", "It Happened One Night"
       9, 1936, 49, "Victor McLaglen", "The Informer"
      10, 1937, 41, "Paul Muni", "The Story of Louis Pasteur"
      11, 1938, 37, "Spencer Tracy", "Captains Courageous"
      12, 1939, 38, "Spencer Tracy", "Boys Town"
      13, 1940, 34, "Robert Donat", "Goodbye, Mr. Chips"
      14, 1941, 32, "James Stewart", "The Philadelphia Story"
      15, 1942, 40, "Gary Cooper", "Sergeant York"
      16, 1943, 43, "James Cagney", "Yankee Doodle Dandy"
      17, 1944, 48, "Paul Lukas", "Watch on the Rhine"
      18, 1945, 41, "Bing Crosby", "Going My Way"
      19, 1946, 39, "Ray Milland", "The Lost Weekend"
      20, 1947, 49, "Fredric March", "The Best Years of Our Lives"
      21, 1948, 57, "Ronald Colman", "A Double Life"
      22, 1949, 41, "Laurence Olivier", "Hamlet"
      23, 1950, 38, "Broderick Crawford", "All the King's Men"
      24, 1951, 39, "José Ferrer", "Cyrano de Bergerac"
      25, 1952, 52, "Humphrey Bogart", "The African Queen"
      26, 1953, 51, "Gary Cooper", "High Noon"
      27, 1954, 35, "William Holden", "Stalag 17"
      28, 1955, 30, "Marlon Brando", "On the Waterfront"
      29, 1956, 39, "Ernest Borgnine", "Marty"
      30, 1957, 36, "Yul Brynner", "The King and I"
      31, 1958, 43, "Alec Guinness", "The Bridge on the River Kwai"
      32, 1959, 49, "David Niven", "Separate Tables"
      33, 1960, 36, "Charlton Heston", "Ben-Hur"
      34, 1961, 47, "Burt Lancaster", "Elmer Gantry"
      35, 1962, 31, "Maximilian Schell", "Judgment at Nuremberg"
      36, 1963, 47, "Gregory Peck", "To Kill a Mockingbird"
      37, 1964, 37, "Sidney Poitier", "Lilies of the Field"
      38, 1965, 57, "Rex Harrison", "My Fair Lady"
      39, 1966, 42, "Lee Marvin", "Cat Ballou"
      40, 1967, 45, "Paul Scofield", "A Man for All Seasons"
      41, 1968, 42, "Rod Steiger", "In the Heat of the Night"
      42, 1969, 45, "Cliff Robertson", "Charly"
      43, 1970, 62, "John Wayne", "True Grit"
      44, 1971, 43, "George C. Scott", "Patton"
      45, 1972, 42, "Gene Hackman", "The French Connection"
      46, 1973, 48, "Marlon Brando", "The Godfather"
      47, 1974, 49, "Jack Lemmon", "Save the Tiger"
      48, 1975, 56, "Art Carney", "Harry and Tonto"
      49, 1976, 38, "Jack Nicholson", "One Flew Over the Cuckoo's Nest"
      50, 1977, 60, "Peter Finch", "Network"
      51, 1978, 30, "Richard Dreyfuss", "The Goodbye Girl"
      52, 1979, 40, "Jon Voight", "Coming Home"
      53, 1980, 42, "Dustin Hoffman", "Kramer vs. Kramer"
      54, 1981, 37, "Robert De Niro", "Raging Bull"
      55, 1982, 76, "Henry Fonda", "On Golden Pond"
      56, 1983, 39, "Ben Kingsley", "Gandhi"
      57, 1984, 53, "Robert Duvall", "Tender Mercies"
      58, 1985, 45, "F. Murray Abraham", "Amadeus"
      59, 1986, 36, "William Hurt", "Kiss of the Spider Woman"
      60, 1987, 62, "Paul Newman", "The Color of Money"
      61, 1988, 43, "Michael Douglas", "Wall Street"
      62, 1989, 51, "Dustin Hoffman", "Rain Man"
      63, 1990, 32, "Daniel Day-Lewis", "My Left Foot"
      64, 1991, 42, "Jeremy Irons", "Reversal of Fortune"
      65, 1992, 54, "Anthony Hopkins", "The Silence of the Lambs"
      66, 1993, 52, "Al Pacino", "Scent of a Woman"
      67, 1994, 37, "Tom Hanks", "Philadelphia"
      68, 1995, 38, "Tom Hanks", "Forrest Gump"
      69, 1996, 32, "Nicolas Cage", "Leaving Las Vegas"
      70, 1997, 45, "Geoffrey Rush", "Shine"
      71, 1998, 60, "Jack Nicholson", "As Good as It Gets"
      72, 1999, 46, "Roberto Benigni", "Life Is Beautiful"
      73, 2000, 40, "Kevin Spacey", "American Beauty"
      74, 2001, 36, "Russell Crowe", "Gladiator"
      75, 2002, 47, "Denzel Washington", "Training Day"
      76, 2003, 29, "Adrien Brody", "The Pianist"
      77, 2004, 43, "Sean Penn", "Mystic River"
      78, 2005, 37, "Jamie Foxx", "Ray"
      79, 2006, 38, "Philip Seymour Hoffman", "Capote"
      80, 2007, 45, "Forest Whitaker", "The Last King of Scotland"
      81, 2008, 50, "Daniel Day-Lewis", "There Will Be Blood"
      82, 2009, 48, "Sean Penn", "Milk"
      83, 2010, 60, "Jeff Bridges", "Crazy Heart"
      84, 2011, 50, "Colin Firth", "The King's Speech"
      85, 2012, 39, "Jean Dujardin", "The Artist"
      86, 2013, 55, "Daniel Day-Lewis", "Lincoln"
      87, 2014, 44, "Matthew McConaughey", "Dallas Buyers Club"
      88, 2015, 33, "Eddie Redmayne", "The Theory of Everything"
      89, 2016, 41, "Leonardo DiCaprio", "The Revenant"


If you worked in a group, you can copy the answers from this page to the other group members.  Select the group members below and click the button to share the answers.

.. groupsub:: csv_file_group_sub
   :limit: 3

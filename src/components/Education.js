import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Education</h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">MCA</h3>
            <p className="text-lg font-semibold">JAMIA MILLIA ISLAMIA ,NEW DELHI</p>
            <p className="text-xs text-muted-foreground mt-1">August 2023 - August 2025</p>
            <p className="mt-2"><strong>CGPA:</strong> 8.3 (Passed with distinction)</p>
          </div>
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">BCA</h3>
            <p className="text-lg font-semibold">Vaishali Institute of Business and Rural Management, Muzaffarpur(Bihar)</p>
            <p className="text-xs text-muted-foreground mt-1">August 2018 - August 2021</p>
            <p className="mt-2"><strong>PERCENTAGE:</strong> 79.19% (Passed with distinction)</p>
          </div>
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Intermediate</h3>
            <h4 className="text-sm text-muted-foreground">BSEB PATNA</h4>
            <p className="text-xs text-muted-foreground mt-1">April 2016 - June 2018</p>
          </div>
          <div className="rounded-md border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">10th</h3>
            <h4 className="text-sm text-muted-foreground">BSEB PATNA</h4>
            <p className="text-xs text-muted-foreground mt-1">April 2014</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
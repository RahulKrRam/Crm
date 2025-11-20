import React, { useState } from 'react';
const Wizard = () => {
  return (
    <div>
      <div class="container">
	<div class="wizard my-5">
		<ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
			<li class="nav-item flex-fill" role="presentation" data-bs-toggle="tooltip" data-bs-placement="top" title="Step 1">
				<a class="nav-link active rounded-circle mx-auto d-flex align-items-center justify-content-center" href="#step1" id="step1-tab" data-bs-toggle="tab" role="tab" aria-controls="step1" aria-selected="true">
					<i class="fas fa-folder-open"></i>
				</a>
			</li>
			<li class="nav-item flex-fill" role="presentation" data-bs-toggle="tooltip" data-bs-placement="top" title="Step 2">
				<a class="nav-link rounded-circle mx-auto d-flex align-items-center justify-content-center" href="#step2" id="step2-tab" data-bs-toggle="tab" role="tab" aria-controls="step2" aria-selected="false" title="Step 2">
					<i class="fas fa-briefcase"></i>
				</a>
			</li>
			<li class="nav-item flex-fill" role="presentation" data-bs-toggle="tooltip" data-bs-placement="top" title="Step 3">
				<a class="nav-link rounded-circle mx-auto d-flex align-items-center justify-content-center" href="#step3" id="step3-tab" data-bs-toggle="tab" role="tab" aria-controls="step3" aria-selected="false" title="Step 3">
					<i class="fas fa-star"></i>
				</a>
			</li>
			<li class="nav-item flex-fill" role="presentation" data-bs-toggle="tooltip" data-bs-placement="top" title="Step 4">
				<a class="nav-link rounded-circle mx-auto d-flex align-items-center justify-content-center" href="#step4" id="step4-tab" data-bs-toggle="tab" role="tab" aria-controls="step4" aria-selected="false" title="Step 4">
					<i class="fas fa-flag-checkered"></i>
				</a>
			</li>
		</ul>
		<div class="tab-content" id="myTabContent">
			<div class="tab-pane fade show active" role="tabpanel" id="step1" aria-labelledby="step1-tab">
				<h3>Step 1</h3>
				<p>This is step 1</p>
				<div class="d-flex justify-content-end">
					<a class="btn btn-info next">Continue <i class="fas fa-angle-right"></i></a>
				</div>
			</div>
			<div class="tab-pane fade" role="tabpanel" id="step2" aria-labelledby="step2-tab">
				<h3>Step 2</h3>
				<p>This is step 2</p>
				<div class="d-flex justify-content-between">
					<a class="btn btn-secondary previous"><i class="fas fa-angle-left"></i> Back</a>
					<a class="btn btn-info next">Continue <i class="fas fa-angle-right"></i></a>
				</div>
			</div>
			<div class="tab-pane fade" role="tabpanel" id="step3" aria-labelledby="step3-tab">
				<h3>Step 3</h3>
				<p>This is step 3</p>
				<div class="d-flex justify-content-between">
					<a class="btn btn-secondary previous"><i class="fas fa-angle-left"></i> Back</a>
					<a class="btn btn-info next">Continue <i class="fas fa-angle-right"></i></a>
				</div>
			</div>
			<div class="tab-pane fade" role="tabpanel" id="step4" aria-labelledby="step4-tab">
				<h3>Complete</h3>
				<p>You have successfully completed all steps.</p>
				<div class="d-flex justify-content-between">
					<a class="btn btn-secondary previous"><i class="fas fa-angle-left"></i> Back</a>
					<a class="btn btn-info next">Submit <i class="fas fa-angle-right"></i></a>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
  );
};

export default Wizard;

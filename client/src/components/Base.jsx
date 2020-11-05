import React from 'react'
import '../css/base.css'
import ScrollableAnchor from 'react-scrollable-anchor'

export default props => {
    const { id } = props;
    // const options = map(timezone,(val,key) => <option key={val} value={val}> {key}</option>);
    return <ScrollableAnchor id={'base-scroll'}>
        <section id="base" className="bg-white section-divider section-divider-y">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-8 col-md-offset-2">
                        {!(props.isBaseSent) && <form onSubmit={(event) => props.handleBase(event)} id="form-base">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h3 className="font-alt letter-spacing-1 mb-0 mt-2 text-uppercase title-small">Form Finally</h3>
                                    <span className="bg-base-color d-block mt-1 mx-auto sep-line-thick"></span>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="base-sequence" className="text-medium">DNA Seq exact fragment:</label>
                                        <input
                                            type="text"
                                            name="sequence"
                                            id="base-sequence"
                                            className="font-alt form-control"
                                            placeholder="Exact Fragment Seq"
                                            value={props.sequence}
                                            onChange={props.handleChange}
                                            //required
                                        />
                                    </div>
                                </div>


{/*                             <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="base-rex" className="text-medium">DNA seq similar fragment (A**TC):</label>
                                        <input
                                            type="text"
                                            name="rex"
                                            id="base-rex"
                                            className="font-alt form-control "
                                            placeholder="Regular Expression Search"
                                            value={props.rex}
                                            onChange={props.handleChange}
                                            //required
                                        />
                                    </div>

                                </div> */}

                            </div>

                            <div className="row">
                                <div className="col-md-12 mt-4 text-center">
                                    <button type="submit" id="btn-form-base" className="btn btn-small btn-lg-medium btn-base-color">Search</button>
                                </div>
                            </div>
                            
                        </form>}
                        {props.isBaseSent && <div>
                            <h3>your search has been submitted</h3>
                            <h4> OK, here are the results:</h4>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    </ScrollableAnchor>
}